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
            image: "/images/WilliamSerna.jpeg",
            name: "William Serna",
            job: "Commercial advisor",
            description: "Datos que puedan interesarle al usuario para generarle confianza y acompañamiento"
        },
        {
            image: "",
            name: "Jhon Orozco",
            job: "Commercial advisor",
            description: "Datos que puedan interesarle al usuario para generarle confianza y acompañamiento"
        }
    ]
    return (
        <div className="bg-blue-k p-10">
            <h1 className="text-white text-3xl font-semibold ml-5">Nuestro equipo</h1>
            <hr className="border-t-4 border-green-l mb-3 ml-5 w-[45%]"/>
            <div className="rounded-[30px]  grid grid-cols-3 gap-3 p-10 backdrop-blur-md bg-white/30 ">
                {team.map((employee) => (
                    <div className="">
                        {/* <div className="w-[159px] h-[159px]  overflow-hidden"> */}
                        <Image src={employee?.image} alt={"employee-img"} className="h-40 w-full object-cover rounded-[30px] border-2 border-green-l" width={50} height={50} />
                        {/* </div> */}
                        <h1 className="text-xs text-white text-center font-semibold">{employee?.name}</h1>
                        <h2 className="text-xs text-green-l text-center font-semibold ">{employee?.job}</h2>
                        <h3 className="text-xs text-white text-center ">{employee?.description}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
};