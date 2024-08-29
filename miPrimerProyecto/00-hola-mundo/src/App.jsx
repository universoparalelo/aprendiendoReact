import './App.css'
import { TwFollowingCard } from './TwFollowingCard'

export function App(){
    

    return (
        <>
            <TwFollowingCard
            userName="universoparalelo" initialIsFollowing>
             Celeste Martin Rodich
            </TwFollowingCard>

            <TwFollowingCard userName="midudev">
                Nigel Duran
            </TwFollowingCard>

            <TwFollowingCard userName="unknown">
                Desconocido NN
            </TwFollowingCard>

        </>
    )
}