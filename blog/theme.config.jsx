/* eslint sort-keys: error */
export default {
  components: {
    h1: ({ children }) => (
      <h1
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(90deg,#7928CA,#FF0080)'
        }}
      >
        {children}
      </h1>
    )
  },
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      All I wanna do is go the distance. See that bell ring and I'm still
      standing.
    </small>
  ),
  title: 'Mauricio Robayo',
  titleSuffix: ' - Mauricio Robayo'
}
