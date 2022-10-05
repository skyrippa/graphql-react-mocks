import {useQuery} from '@apollo/client';
import MISSIONS_QUERY from './missions.gql'

export const Missions = () => {
  const {loading, error, data} = useQuery(MISSIONS_QUERY);

  if (loading) return null;
  if(error) return `Error! ${error}`;
  if (!data?.missions?.length) {
    return 'No missions found';
  }

  const {missions} = data;

  return <>
    <h1>Missions</h1>
    {missions.map(mission => {
      return <div className="mission" key={mission.id}>
        <h2>{mission.name}</h2>
        <p>{mission.description}</p>
        <h3>Manufacturers:</h3>
        <ol>
          {mission.manufacturers?.map(manufacturer => <li key={`${mission.id}-${manufacturer}`}>{manufacturer}</li>)}
        </ol>
        <h3>Links:</h3>
        <ul>
          {mission.twitter?.length && <li><a href={mission.twitter}>{mission.twitter}</a></li>}
          {mission.website?.length && <li><a href={mission.website}>{mission.website}</a></li>}
          {mission.wikipedia?.length && <li><a href={mission.wikipedia}>{mission.wikipedia}</a></li>}
        </ul>
        <h3>Sponsors:</h3>
        <ol>
          {mission.sponsors?.map(sponsor => <li key={`${mission.id}-${sponsor}`}>{sponsor}</li>)}
        </ol>
      </div>
    })}
  </>
}