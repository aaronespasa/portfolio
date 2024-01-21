import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import musicManagerImg from "@/public/project/cover/music-manager.png";

export default function MusicManager() {
    return (
        <ProjectTemplate
            slug="music-manager"
            intro="Music Manager is a sophisticated project that utilizes a NoSQL database with MongoDB to manage and optimize a comprehensive database of artists and concerts. It focuses on clustering optimization to enhance data retrieval and management efficiency."
            image={musicManagerImg}
        >
            <Callout tag="What's it?" type="dark">
                The project aims to revolutionize the way music event data is stored and accessed. By leveraging the flexibility and scalability of MongoDB, Music Manager efficiently organizes and clusters information about artists and concerts, offering a streamlined, effective solution for managing large-scale music event databases.
            </Callout>
        </ProjectTemplate>
    );
}
