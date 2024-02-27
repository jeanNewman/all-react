import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App () {
    const formatUserName = (userName) => '@' + userName
    return(
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="jeanNewman"
                name="Jean Newman" 
                initialFollowing={true}
                >

            </TwitterFollowCard>

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="vitoyayo" 
                name="Jean Newman" 
                initialFollowing={false}
                >

            </TwitterFollowCard>
            
        </section>
    )
}