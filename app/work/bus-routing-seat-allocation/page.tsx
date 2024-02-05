import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import busRoutingSeatAllocationImg from "@/public/project/blog-cover/bus-routing-seat-allocation.jpeg";

export default function BusRoutingSeatAllocation() {
    return (
        <ProjectTemplate
            slug="bus-routing-seat-allocation"
            intro="Bus Routing Seat Allocation is an innovative project that tackles the bus routing and seat allocation problem using a heuristic algorithm. This project is framed as a constraint satisfaction problem, focusing on optimizing bus routes and seat assignments for efficiency and passenger convenience."
            image={busRoutingSeatAllocationImg}
        >
            <Callout tag="What's it?" type="dark">
                This project is dedicated to developing a heuristic algorithm to efficiently solve the bus routing and seat allocation challenge. It aims to balance multiple constraints such as timing, capacity, and route optimization, providing a practical solution for transportation management.
            </Callout>
        </ProjectTemplate>
    );
}
