import Image from "next/image"

export const Team = () => {
    const team = [
        {
            image: "/images/HeidyFlorez.jpeg",
            name: "Heidy Flórez",
            job: "Web UI Developer",
            description: "Desarrolladora front-end especializada en la creación de sitios web, experiencia en AWS, DevOps y metodologías ágiles."
        },
        {
            image: "/images/DanielMayo.jpeg",
            name: "Daniel Mayo",
            job: "Web UI Developer",
            description: "Datos que puedan interesarle al usuario para generarle confianza y acompañamiento"
        },
        {
            image: "/images/LuisRuiz.jpeg",
            name: "Luis Ruiz",
            job: "Full stack developer",
            description: "Datos que puedan interesarle al usuario para generarle confianza y acompañamiento"
        },
        {
            image: "/images/YoselinAlvarez.jpeg",
            name: "Yoselin Alvarez",
            job: "Interactive Designer",
            description: "Diseñadora Interactiva Actualmente estudiante en la Universidad EAFIT Habilidades en Illustrator, Photoshop, Canva y otras herramientas digitales."
        },
        {
            image: "/images/fotoPerfil.jpg",
            name: "William Serna",
            job: "Commercial advisor",
            description: "Datos que puedan interesarle al usuario para generarle confianza y acompañamiento"
        },
        {
            image: "/images/fotoJohn1.jpeg",
            name: "Jhon Orozco",
            job: "Commercial advisor",
            description: "Datos que puedan interesarle al usuario para generarle confianza y acompañamiento"
        }
    ]
    return (
        <div className="bg-blue-k p-10">
            <h1 className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold ml-5">Nuestro equipo</h1>
            <hr className="border-t-4 border-green-l mb-3 ml-5 w-[45%]"/>
            <div className="rounded-[30px] grid sm:grid-cols-3 gap-3 p-10 backdrop-blur-md bg-white/30 ">
                {team.map((employee, index) => (
                    <div className="flex flex-col items-center" key={index}>
                        <Image src={employee?.image} alt={"employee-img"} className="h-40 w-full max-w-[20rem] xl:h-[14rem] object-cover border-2 rounded-[30px] border-green-l " width={100} height={100} />
                        <h1 className="text-xs lg:text-sm 2xl:text-base text-white text-center font-semibold mt-4">{employee?.name}</h1>
                        <h2 className="text-xs lg:text-sm 2xl:text-base text-green-l text-center font-semibold mb-2">{employee?.job}</h2>
                        <h3 className="text-xs lg:text-sm 2xl:text-base text-white text-center mb-2">{employee?.description}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
};