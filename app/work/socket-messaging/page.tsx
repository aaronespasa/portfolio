import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import socketMessagingImg from "@/public/project/blog-cover/socket-messaging.png";

export default function SocketMessaging() {
    return (
        <ProjectTemplate
            slug="socket-messaging"
            intro="Socket Messaging is an advanced project that implements a socket messaging system in C, designed to connect multiple Python clients. This project focuses on creating a reliable and efficient communication platform using socket programming."
            image={socketMessagingImg}
        >
            <Callout tag="What's it?" type="dark">
                The Socket Messaging project aims to facilitate seamless communication between Python clients through a robust C-implemented socket system. This project showcases the integration of different programming languages to build a versatile and efficient messaging platform for various applications.
            </Callout>
        </ProjectTemplate>
    );
}
