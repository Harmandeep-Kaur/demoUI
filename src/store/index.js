import { createStore } from "vuex";
import axios from "axios";

const baseURL = "http://localhost:3008/api/v1/user/createProfile"

export default createStore({
    state: {
        formData: {
            opportunity_client_type: "Individual",
            opportunity_client_no: "1 Person",
            opportunity_martial_status: "notMarried",
            opportunity_firstname: "first name",
            opportunity_lastname: "last name",
            opportunity_id: null,
            opportunity_email: "",
            opportunity_mobile: null,
            opportunity_landline: null,
            opportunity_postal_address: "",
            opportunity_residental_address: "",
            opportunity_pay_type: "Bonded",
            opportunity_pat_category: "A",
            opportunity_best_price: "",
            opportunity_deposite: "",
            opportunity_deposite_date: null,
            opportunity_parking_base: "",
            opportunity_parking_cost: null,
            opportunity_stove_option: "",
            opportunity_stove_cost: 0,
            opportunity_extra_cost: 0,
            opportunity_bond_amount: 0,
            opportunity_contract_price: 0,
            opportunity_additional_cost: 0,
            opportunity_notes: "",
            opportunity_gardenNumber: 0,
            opportunity_gardenSize: 0,
            opportunity_originalBayNo: "",
            opportunity_parkingBayNo: "",
            opportunity_spareRoom: "bedroom",
            opportunity_mood: "allure",
            opportunity_flooring: "tiles",
            opportunity_otp: null,
            opportunity_uploadId: null,
            opportunity_addressproof: null,
            opportunity_upload_deposite: null,
            opportunity_upload_statement: null,
            opportunity_upload_lastThree: null,
            opportunity_sale_agreement: "",
            opportunity_sale_mobile: null,
        }
    },
    actions: {
        postData(context, data) {
            console.log(data, 'in store')
            axios.post(baseURL, data).then(res => {
                alert(res.status, 'data added successfully')
            }).catch(err => {
                alert(err.message)
                console.log(err)
            })
        }
    }
})