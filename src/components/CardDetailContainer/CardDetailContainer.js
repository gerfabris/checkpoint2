import { CardDetail } from "../CardDetail/CardDetail";
import { SpinnerCs } from "../SpinnerCs/SpinnerCs";
import { useCardDetail } from "./useCardDetail";

export const CardDetailContainer = () =>{
    
    const { card, loading } = useCardDetail()

    return(
            <section>
                <div>
                    {
                        loading
                        ? <SpinnerCs/>

                        : <CardDetail card={card} />
                    }
                </div>
            </section>
    )
}