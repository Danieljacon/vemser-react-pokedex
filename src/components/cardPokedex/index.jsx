
import styles from '../cardPokedex/cardPokedex.module.css'

const CardPokedex = ({poke, index}) => {
    // const [cor, setCor] = useState([]);
    // let id = index.id;
    // const getPokemon = async () => {
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${id}/`);
    //     const data = await response.json();
    //     console.log(id);
    //     return setCor(data.results);
    //   };

    //   getPokemon()

    return (
        <div className={styles.card}>
            <div  className={styles.item}>
                <h4>{poke.name}</h4>
            </div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`} alt="" />
        </div>

    )


}

export default CardPokedex;