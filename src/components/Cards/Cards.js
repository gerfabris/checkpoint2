import { CardsListContainer } from "../CardsListContainer/CardsListContainer"

export const Cards = () =>{
    return(
            <main>
                <h2 className="text-center my-3">Cards</h2>
                    <section className="row">
                        <CardsListContainer/>
                    </section>
            </main>
    )
}