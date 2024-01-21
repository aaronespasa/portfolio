import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import computerVisionWebImg from "@/public/project/cover/computervision-web.png";

export default function ComputerVisionWeb() {
    return (
        <ProjectTemplate
            slug="computer-vision-web"
            intro="Computer Vision Hispano is an e-learning platform dedicated to the field of computer vision. This project aims to provide comprehensive learning resources and interactive modules for users to understand and explore various aspects of computer vision technology."
            image={computerVisionWebImg}
        >
            <Callout tag="What's it?" type="dark">
                The Computer Vision Hispano project serves as an educational platform, offering a range of courses and materials for learners to delve into the world of computer vision. It's designed to cater to different learning styles, providing an accessible and engaging way for students and professionals to enhance their knowledge in this rapidly evolving field.
            </Callout>
        </ProjectTemplate>
    );
}
