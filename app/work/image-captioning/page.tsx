import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import imageCaptioningImg from "@/public/project/blog-cover/image-captioning.webp";

export default function ImageCaptioning() {
    return (
        <ProjectTemplate
            slug="image-captioning"
            intro="Image Captioning is an impactful project that combines Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN) to generate descriptions for images. This tool is specifically designed to aid blind and visually impaired individuals in understanding visual content on the internet."
            image={imageCaptioningImg}
        >
            <Callout tag="What's it?" type="dark">
                The Image Captioning project focuses on creating an AI-powered tool that provides descriptive captions for images, enhancing web accessibility for the blind. By using a blend of CNN and RNN, it aims to accurately convey the context and content of online images in a user-friendly manner.
            </Callout>
        </ProjectTemplate>
    );
}
