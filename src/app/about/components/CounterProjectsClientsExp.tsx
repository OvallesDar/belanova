import CountUpComponent from "@/components/CountUpComponent";

const histories = [
    {
        end: 100,
        description: "clientes satisfechos"
    },
    {
        end: 200,
        description: "proyectos"
    },
    {
        end: 10,
        description: "años de experiencia"
    }
]

export default function CounterProjectsClientsExp() {
  return (
    <div>

    <div className="bg-[url('https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/construction.jpg')] bg-no-repeat bg-cover relative h-96">
        <span className="absolute bg-[#d6d5d59f] w-full h-96 -z-0"/>
        <div className="container h-full justify-center flex flex-col gap-5">
            <h2 className="text-center text-2xl z-10"><span className="text-primary">Somos la solución perfecta</span><br />para tus proyectos</h2>
            <div className="flex flex-col md:flex-row justify-evenly gap-3 z-10">
                {
                    histories.map((history, index)=>(
                        
                        <CountUpComponent key={index} history={history} />
                    ))
                }
                
            </div>
        </div>
    </div>
                </div>
  )
}