export function EmailSideBar({ toggleCompose }) {
    return <section className="side-bar">
        <button className="btn-compose" onClick={()=>(toggleCompose(true))}>Compose</button>
    </section>
}