function login() {
    return (
        <div className="login-page">
            <div className="login-page-content">
                <h3>로그인</h3>
                <input id="username" type="text" placeholder="아이디를 입력하세요" />
                <input id="password" type="password" placeholder="비밀번호를 입력하세요" />
                <div className="login_bt">
                    <input className="keep-login" type="checkbox" />
                    <p>로그인상태 유지</p>
                </div>
                <button>
                    로그인
                </button>
                <a href="#" className="members">회원가입</a>
            </div>
        </div>
    );
}
export default login;