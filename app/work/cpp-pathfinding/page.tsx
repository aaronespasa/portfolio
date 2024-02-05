import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import cppPathfindingImg from "@/public/project/cover/cpp-pathfinding.png";

export default function CppPathfinding() {
    return (
        <ProjectTemplate
            slug="cpp-pathfinding"
            intro="Cpp Pathfinding is a project that features a C++ implementation of the A* pathfinding algorithm. This algorithm is applied to real-world maps sourced from OpenStreetMap to calculate the shortest path between two points, showcasing its practical application in navigational systems."
            image={cppPathfindingImg}
        >
            <Callout tag="What's it?" type="dark">
                The project focuses on leveraging the A* pathfinding algorithm within a C++ framework to solve real-world navigation problems. By integrating with OpenStreetMap, it provides a tool to efficiently determine the shortest routes, enhancing the capabilities of mapping and GPS-based systems.
            </Callout>
        </ProjectTemplate>
    );
}
