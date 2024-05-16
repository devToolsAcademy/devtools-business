import Image from "next/image"

export const Team = () => {
    const team = [
        {
            image: "https://dgpi9g6k6hezi.cloudfront.net/HeidyFlorez1.jpeg",
            name: "Heidy Flórez",
            job: "Web UI Developer",
            description: "Desarrolladora front-end especializada en la creación de sitios web, experiencia en AWS, DevOps y metodologías ágiles."
        },
        {
            image: "https://dgpi9g6k6hezi.cloudfront.net/DanielMayo.jpeg",
            name: "Daniel Mayo",
            job: "Web UI Developer",
            description: "Soy un apasionado desarrollador con experiencia como Full-Stack. Mi enfoque versátil me ha permitido trabajar en una variedad de proyectos."
        },
        {
            image: "https://dgpi9g6k6hezi.cloudfront.net/LuisRuiz.jpeg",
            name: "Luis Ruiz",
            job: "Full stack developer",
            description: "Desarrollador full stack apasionado por la creación de soluciones tecnológicas innovadoras y escalables."
        },
        {
            image: "https://dgpi9g6k6hezi.cloudfront.net/YoselinAlvarez.jpeg",
            name: "Yoselin Alvarez",
            job: "Interactive Designer",
            description: "Diseñadora Interactiva Actualmente estudiante en la Universidad EAFIT Habilidades en Illustrator, Photoshop, Canva y otras herramientas digitales."
        },
        {
            image: "https://dgpi9g6k6hezi.cloudfront.net/williamSerna3.jpeg",
            name: "William Serna",
            job: "Commercial advisor",
            description: "Commercial advisor con experiencia en ventas y análisis de mercado. Desarrollador full stack comprometido con soluciones innovadoras para satisfacer al cliente."
        },
        {
            image: "https://dgpi9g6k6hezi.cloudfront.net/fotoJohn1.jpeg",
            name: "Jhon Orozco",
            job: "Commercial advisor",
            description: "Profesional en Marketing, con experiencia en el desarrollo de estrategias y tácticas para construir negocios sostenibles en múltiples categorías."
        }
    ]
    return (
        <div className="bg-blue-k p-10">
            <h1 className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold ml-5">Nuestro equipo</h1>
            <hr className="border-t-4 border-green-l mb-3 ml-5 w-[45%]"/>
            <div className="rounded-[30px] grid sm:grid-cols-3 gap-3 p-10 backdrop-blur-md bg-white/30 ">
                {team.map((employee, index) => (
                    <div className="flex flex-col items-center" key={index}>
                        <Image src={employee?.image} alt={"employee-img"} unoptimized className="h-40 w-full max-w-[20rem] xl:h-[14rem] object-cover border-2 rounded-[30px] border-green-l " width={100} height={100} />
                        <h1 className="text-xs lg:text-sm 2xl:text-base text-white text-center font-semibold mt-4">{employee?.name}</h1>
                        <h2 className="text-xs lg:text-sm 2xl:text-base text-green-l text-center font-semibold mb-2">{employee?.job}</h2>
                        <h3 className="text-xs lg:text-sm 2xl:text-base text-white text-center mb-2">{employee?.description}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
};