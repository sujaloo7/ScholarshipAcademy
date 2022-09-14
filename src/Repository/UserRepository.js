import Repository, { baseUrl } from "./Repository";
import axios from "axios";

export function userRegister(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/user_register`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function userLogin(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/user_login`, payload);

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getCountry(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/get_country`, payload);

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getState(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/get_state`, payload);

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getProfile(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_user_profile`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function updateUserProfile(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/update_user_profile`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getLanguage(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_language`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getAttributeVal(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_attribute_value`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function updateUserDetails(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/update_user_details`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}

export function getUserList(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_university_profile`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getCategory(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_category`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getStudentCountry(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/student_country`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getStudentState(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/student_state`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function addGuestUser(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/add_guest_user`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getUniversityProfile(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_university_profile`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getUniversitiesProfile(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_universities_profile`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}

export function updateUniversityDetail(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/update_university_details`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getPrivacyPolicy(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_privacy_policy`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getTermAndCondition(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_term_and_condition`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getWorkingPolicy(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_working_policy`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getAboutUs(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_about_us`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getContactUs(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(
        `${baseUrl}/get_contact_us`,
        payload
      );

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getFaq(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/get_faq`, payload);

      return resolve(response.data);
    } catch (error) {}
  });
}
export function addCourse(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/add_course`, payload);

      return resolve(response.data);
    } catch (error) {}
  });
}
export function getCourse(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/get_course`, payload);

      return resolve(response.data);
    } catch (error) {}
  });
}

export function getBlog(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/get_blog`, payload);
      return resolve(response.data);
    } catch (error) {}
  });
}

// export function getExternalApiCountries(payload) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await Repository.get(
//         `https://hei.api.uni-foundation.eu/api/public/country`,
//         payload
//       );

//       return resolve(response.data);
//     } catch (error) {}
//   });
// }

// export async function getExternalApiCountries(payload) {
//   const response = await axios({
//     url: "https://hei.api.uni-foundation.eu/api/public/country",
//     method: "GET",
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

//     },

//   });
