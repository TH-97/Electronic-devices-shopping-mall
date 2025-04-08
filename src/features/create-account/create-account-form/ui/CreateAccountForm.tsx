import { useState } from "react";
import styles from "./CreateAccountForm.module.css";
import { CreateAccountFormData } from "../model/type";

const initialCreateAccountFormData: CreateAccountFormData = {
  userId: "",
  userPw: "",
  userName: "",
  userEmail: "",
  userPhone: "",
  userAge: 0,
  userGender: "",
  userLocation: "",
  role: "USER", // 기본 역할
};

export function CreateAccountForm() {
  const [formData, setFormData] = useState(initialCreateAccountFormData);
  const [pwError, setPwError] = useState(""); // 에러 메시지
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData.userPw !== e.target.value && e.target.value.length !== 0) {
      setPwError("비밀번호가 일치하지 않습니다.");
    } else {
      setPwError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (formData.userId,
      formData.userName,
      formData.userLocation,
      formData.userPw,
      formData.userEmail === "")
    ) {
      alert("기본 사항을 채워 주십시오");
      return;
    }
    if (!isChecked1 || !isChecked2) {
      alert("약관에 동의 하셔야 회원가입이 가능합니다");
      return;
    }
    console.log("회원가입 데이터:", formData, isChecked1);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["basic-info"]}>
        <h2>기본 정보</h2>
        <div className={styles.formGroup}>
          <label>이름</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            placeholder="이름을 입력하세요"
          />
        </div>

        <div className={styles.formGroup}>
          <label>아이디</label>
          <input
            type="text"
            name="userId"
            onChange={handleChange}
            placeholder="아이디를 입력하세요"
          />
        </div>

        <div className={styles.formGroup}>
          <label>이메일</label>
          <input
            type="email"
            name="userEmail"
            onChange={handleChange}
            placeholder="이메일 주소를 입력하세요"
          />
        </div>

        <div className={styles.formGroup}>
          <label>주소</label>
          <input
            type="text"
            name="userLocation"
            onChange={handleChange}
            placeholder="주소를 입력해주세요"
          />
        </div>

        <div className={styles.formGroup}>
          <label>비밀번호</label>
          <input
            type="password"
            name="userPw"
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <div className={styles.formGroup}>
          <label>비밀번호 확인</label>
          <input
            type="password"
            name="userPwCheck"
            onChange={handleConfirmPwChange}
            placeholder="비밀번호를 다시 입력하세요"
          />
          {pwError && (
            <p style={{ color: "red", textAlign: "center", marginTop: "16px" }}>
              {pwError}
            </p>
          )}
        </div>
      </div>
      <div className={styles["additional-info"]}>
        <h2>추가정보</h2>
        <div className={styles.formGroup}>
          <label>휴대폰 번호</label>
          <input
            type="text"
            name="userPhone"
            onChange={handleChange}
            placeholder=" 010-1234-5678 "
          />
        </div>

        <div className={styles.formGroup}>
          <label>성별</label>
          <select name="userGender">
            <option value="male">남자</option>
            <option value="fmale">여자</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>나이</label>
          <input
            type="text"
            name="userAge"
            onChange={handleChange}
            placeholder="나이를 입력해주세요"
          />
        </div>
      </div>
      <div className={styles["privacy-consents"]}>
        <h2>약관 동의</h2>
        <div className={styles["privacy-item"]}>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={isChecked1}
              onChange={(e) => setIsChecked1(e.target.checked)}
            />
            이용 약관 동의
          </label>
        </div>
        <div className={styles["privacy-item"]}>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={isChecked2}
              onChange={(e) => setIsChecked2(e.target.checked)}
            />
            개인정보 처리방침 동의
          </label>
        </div>
        <div className={styles["privacy-item"]}>
          <label>
            <input type="checkbox" name="agree-choice" />
            마케팅 정보 수신 동의 (선택)
          </label>
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        회원가입
      </button>
    </form>
  );
}
