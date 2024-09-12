import css from './HomePage.module.css';
// import DocumentTitle from '../../components/DocumentTitle';
import tutorCharacter from '../../assets/Foto/foto2.png';
const HomePage = () => {
  return (
    <div className={css.homepage}>
      {/* <DocumentTitle>Home</DocumentTitle> */}

      {/* Header */}
      <header className={css.header}>
        <div className={css.logo}>LearnLingo</div>
        <nav className={css.nav}>
          <a href="/home">Home</a>
          <a href="/teachers">Teachers</a>
        </nav>
        <div className={css.auth_buttons}>
          <button className={css.login_btn}>Log in</button>
          <button className={css.register_btn}>Registration</button>
        </div>
      </header>

      {/* Main Section */}
      <section className={css.main_section}>
        <div className={css.text_section}>
          <h1>
            Unlock your potential with the best <span>language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors. Elevate your
            language proficiency to new heights by connecting with highly qualified and experienced
            tutors.
          </p>
          <button className={css.get_started_btn}>Get started</button>
        </div>
        <div className={css.image_section}>
          <img src={tutorCharacter} alt="Tutor Character" />
        </div>
      </section>

      {/* Stats Section */}
      <section className={css.stats_section}>
        <div className={css.stat_item}>
          <h3>32,000+</h3>
          <p>Experienced tutors</p>
        </div>
        <div className={css.stat_item}>
          <h3>300,000+</h3>
          <p>5-star tutor reviews</p>
        </div>
        <div className={css.stat_item}>
          <h3>120+</h3>
          <p>Subjects taught</p>
        </div>
        <div className={css.stat_item}>
          <h3>200+</h3>
          <p>Tutor nationalities</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
