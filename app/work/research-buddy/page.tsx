import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import paintwallImg from "@/public/project/blog-cover/research-buddy.png";

export default function PaintWall() {
    return (
        <ProjectTemplate
            slug="research-buddy"
            intro="Vodafone's RAG Model (Chatbot) to help researchers find information about their projects. This project was developed in collaboration with Vodafone's Innovation Team."
            image={paintwallImg}
        >
            <Callout tag="What's it?" type="dark">
                This project aims to develop a chatbot to help researchers find information about all the research projects that are being investigated in Vodafone.
            </Callout>
        </ProjectTemplate>
    );
}