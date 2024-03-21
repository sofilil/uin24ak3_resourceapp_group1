import { resources } from '../assets/ressurser';
import Header from './Header';
import Nav from './Nav';

const Resources = ({ category }) => {
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <>
      <Header />
      <Nav />
      <main>
        <h2>{category} Ressurser</h2>
        <ul>
          {filteredResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Resources;