import { strawhatCrew } from '../data/db'
import Card from '../components/Card'

const PageHome = () => {
    return (
        <div>
            <h1 className="mb-2 text-center text-3xl font-medium">
                Tailwin Tutoring
            </h1>
            <h2 className="text-center text-2xl font-bold text-yellow-300">
                Strohhut Bande
            </h2>

            <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {strawhatCrew.map((strawhat) => {
                    return (
                       <Card
                       key={strawhat.id}
                       name={strawhat.name}
                       nickname={strawhat.nickname}
                       img={strawhat.img}
                       position={strawhat.position}
                       bounty={strawhat.bounty}
                       
                       />
                    )
                })}
            </div>
        </div>
    )

    /* img, name, nickname, position, bounty */
}

export default PageHome
