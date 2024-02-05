import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import backgroundRemovalImg from "@/public/project/blog-cover/videoconferencing-background-removal.png";

export default function VideoConferencingBackgroundRemoval() {
    return (
        <ProjectTemplate
            slug="videoconferencing-background-removal"
            intro="This project showcases a background removal model specifically designed for videoconferencing, utilizing the U-Net architecture in computer vision. Presented as a challenging task to students in the Saturdays.AI course, it highlights practical applications of advanced AI techniques in everyday technology."
            image={backgroundRemovalImg}
        >
            <Callout tag="What's it?" type="dark">
                The VideoConferencing Background Removal project aims to enhance virtual meeting experiences by developing a sophisticated model that accurately removes backgrounds in real-time video feeds. This implementation of U-Net architecture demonstrates a practical application of AI in improving online communication tools.
            </Callout>
        </ProjectTemplate>
    );
}