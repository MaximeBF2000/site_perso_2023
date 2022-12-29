import '../global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="font-montserrat">
      <Component {...pageProps} />
    </div>
  )
}
