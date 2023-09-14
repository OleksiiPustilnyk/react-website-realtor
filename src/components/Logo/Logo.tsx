import logo from '../../assets/logo/builder-logo.svg'

type Props = {}

const Logo = (props: Props) => {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="brand-logo" />
            </div>
        </>
    )
}
export default Logo
