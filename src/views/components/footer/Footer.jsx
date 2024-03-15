import Link from '../Link'
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                </div>
                <div className="row">
                    <ul>
                        <Link href='contact' label='Contate-nos'></Link>
                    </ul>
                </div>
                <div className="row">
                    KME Copyright © 2024 Kme Solutions - All rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer
