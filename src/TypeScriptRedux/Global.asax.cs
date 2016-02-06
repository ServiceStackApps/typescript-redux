using System;
using System.IO;
using Funq;
using ServiceStack;
using ServiceStack.Web;

namespace TypeScriptRedux
{
    public class AppHost : AppHostBase
    {
        public AppHost() : base("TypeScript Redux", typeof(ReduxServices).Assembly) { }

        public override void Configure(Container container)
        {
            Plugins.Add(new ServerEventsFeature());
        }
    }

    [Route("/publish-channel/{Channel}")]
    public class PublishToChannel : IReturnVoid, IRequiresRequestStream
    {
        public string Channel { get; set; }
        public string Selector { get; set; }
        public Stream RequestStream { get; set; }
    }

    [Route("/send-user/{To}")]
    public class SendUser : IReturnVoid, IRequiresRequestStream
    {
        public string To { get; set; }
        public string Selector { get; set; }
        public Stream RequestStream { get; set; }
    }

    public class ReduxServices : Service
    {
        public IServerEvents ServerEvents { get; set; }

        public void Any(PublishToChannel request)
        {
            var msg = request.RequestStream.ReadFully().FromUtf8Bytes();
            ServerEvents.NotifyChannel(request.Channel, request.Selector, msg);
        }

        public void Any(SendUser request)
        {
            var msg = request.RequestStream.ReadFully().FromUtf8Bytes();
            ServerEvents.NotifyUserId(request.To, request.Selector, msg);
        }
    }

    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            new AppHost().Init();
        }
    }
}