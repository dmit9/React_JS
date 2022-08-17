import s from './Navbar.module.css';
console.log('SSSS'+s);
const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}>
        <a href='/profile'>Profile</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
        <a href='Dialog'>Messages</a>
    </div>
    <div className={s.item}>
        <a>News</a>
    </div>
    <div className={s.item}>
        <a>Music</a>
    </div>
    <div className={s.item}>
        <a>Settings</a>
    </div>
</nav>
}

export default Navbar;
