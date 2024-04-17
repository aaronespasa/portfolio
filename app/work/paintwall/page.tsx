import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import paintwallImg from "@/public/project/blog-cover/paintwall.webp";

export default function PaintWall() {
    return (
        <ProjectTemplate
            slug="paintwall"
            intro="This project involves applying image segmentation in real-time to a real-world project taking into account client's needs."
            image={paintwallImg}
        >
            <Callout tag="What's it?" type="dark">
                PaintWall is a project that aims to provide a solution for the problem of painting walls in a house. The idea is to provide a way to visualize how a wall would look like with a certain color, without having to paint it.
            </Callout>
        </ProjectTemplate>
    );
}