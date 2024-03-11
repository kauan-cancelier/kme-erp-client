import Link from '../Link'
import './footer.css'

function Footer() {
    return (
        <footer>
            <div class="footer">
                <div class="row">
                </div>
                <div class="row">
                    <ul>
                        <Link href='contact' label='Contate-nos'></Link>
                    </ul>
                </div>
                <div class="row">
                    KME Copyright © 2024 Kme Solutions - All rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer
