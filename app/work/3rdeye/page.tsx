import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import thirdEyeImage from "@/public/project/blog-cover/3rdeye.webp";

export default function ThirdEye() {
    return (
        <ProjectTemplate
            slug="3rdeye"
            intro="This project, honored in the Software Development Projects Management course, details the development of a computer vision application for firefighters, featuring advanced, real-time image processing aligned with client and firefighter needs."
            image={thirdEyeImage}
        >
            <Callout tag="What's it?" type="dark">
                This project develops a helmet-mounted device for firefighters.
            </Callout>
        </ProjectTemplate>
    );
}