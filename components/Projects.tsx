import styles from './Projects.module.scss';

export default function Projects() {
    return (<>
        <section className={styles.projects}>
            <h1 className={styles.projects__heading}>Projekte</h1>
            <ul className={styles.projects__list}>
                <li className={styles.projects__listItem}>
                    <h1>
                        <a href="https://github.com/joostme/vue-todo" target="_blank">vue-todo</a>
                    </h1>
                    <p>A simple todo list with VueJS</p>
                    <ul className={styles.project__techList}>
                        <li className={styles.project__tech}>VueJS</li>
                        <li className={styles.project__tech}>Vuex</li>
                        <li className={styles.project__tech}>Vue-Router</li>
                        <li className={styles.project__tech}>Axios</li>
                        <li className={styles.project__tech}>Bulma</li>
                    </ul>
                </li>
                <li className={styles.projects__listItem}>
                    <h1>
                        <a href="https://github.com/joostme/ngrx-resolve" target="_blank">ngrx-resolve</a>
                    </h1>
                    <p>An example application on connecting routes, resolvers and ngrx in Angular</p>
                    <ul className={styles.project__techList}>
                        <li className={styles.project__tech}>Angular 2+</li>
                        <li className={styles.project__tech}>ngrx</li>
                        <li className={styles.project__tech}>RxJS</li>
                    </ul>
                </li>
                <li className={styles.projects__listItem}>
                    <h1>
                        <a href="https://github.com/joostme/pighole" target="_blank">pighole</a>
                    </h1>
                    <p>A functional game library for the game Pig Hole Big Hole</p>
                    <ul className={styles.project__techList}>
                        <li className={styles.project__tech}>TypeScript</li>
                        <li className={styles.project__tech}>Lodash</li>
                    </ul>
                </li>
                <li className={styles.projects__listItem}>
                    <h1>
                        <a href="https://github.com/joostme/ngx-rps" target="_blank">ngx-rps</a>
                    </h1>
                    <p>A Rock-Paper-Scissors game done with Angular 5 and RxJS</p>
                    <ul className={styles.project__techList}>
                        <li className={styles.project__tech}>Angular 5</li>
                        <li className={styles.project__tech}>RxJS</li>
                    </ul>
                </li>
                <li className={styles.projects__listItem}>
                    <h1>
                        <a href="https://github.com/joostme/takeWhileAlive" target="_blank">takeWhileAlive</a>
                    </h1>
                    <p>Automatically unsubscribe any active subscriptions inside Angular components/services using a custom operator</p>
                    <ul className={styles.project__techList}>
                        <li className={styles.project__tech}>Angular 6</li>
                        <li className={styles.project__tech}>RxJS</li>
                    </ul>
                </li>
                <li className={styles.projects__listItem}>
                    <h1>
                        <a href="https://github.com/ngxp/store-service" target="_blank">@ngxp/store-service</a>
                    </h1>
                    <p>Adds an abstraction layer between Angular components and the ngrx store</p>
                    <ul className={styles.project__techList}>
                        <li className={styles.project__tech}>Angular 6</li>
                        <li className={styles.project__tech}>RxJS</li>
                        <li className={styles.project__tech}>ngrx</li>
                    </ul>
                </li>
            </ul>
        </section>
    </>)
}