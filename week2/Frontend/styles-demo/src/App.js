// Inline Styles
// const App = () => {
//   const headingStyle = {
//  color: 'blue',
//  fontSize: '24px',
//  textAlign: 'center',
//   };

//   return (
//  <div>
//    <h1 style={headingStyle}>Inline Styles</h1>
//    <p style={{ color: 'green' }}>This is a green paragraph.</p>
//  </div>
//   );
// };

// export default App;


// External CSS File
// import './styles.css';

// const App = () => {
//   return (
//  <div>
//    <h1 className="external-heading">External CSS Styles</h1>
//    <p className="external-paragraph">Paragraph using external CSS styles.</p>
//  </div>
//   );
// };

// export default App;


// CSS Modules
import styles from './styles.module.css';

const App = () => {
  return (
    <div>
      <h1 className={styles['module-heading']}>CSS Modules</h1>
      <p className={styles.paragraph}>Paragraph using CSS Modules.</p>
    </div>
  );
};

export default App;
