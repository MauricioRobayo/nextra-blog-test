import Link from 'next/link'

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
    <div style={{ marginTop: '8rem', textAlign: 'center' }}>
      <hr />
      <p>
        <small>
          The successful warrior is the average man, with laser-like focus.
        </small>
      </p>
      <a href="https://github.com/MauricioRobayo">GitHub</a> ·{' '}
      <a href="https://linkedin.com/mauriciorobayo">LinkedIn</a>
    </div>
  ),
  title: 'Mauricio Robayo',
  titleSuffix: ' - Mauricio Robayo'
}
