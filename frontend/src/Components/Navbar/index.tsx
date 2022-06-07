import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'

export default function Navbar() {

    return (<header>
        <nav className='container'>
            <div className='orcamentos-nav-content'>
                <h1>Esquadrias Miranda</h1>
                <a className='' href="https://github.com/Luiz-Miranda">
                    <div className='orcamentos-contact-container'>
                        <GithubIcon />
                        <p className='orcamentos-contact-link'>/Luiz-Miranda</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>)
}