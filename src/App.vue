<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      dark
      ref="stepper"
      active-color="warning"
      done-color="secondary"
      animated
    >
      <q-step :name="1" title="Client Info" icon="info" :done="step > 1">
        <div class="row">
          <div class="col">
            <q-radio
              dark
              v-model="formData.opportunity_client_type"
              val="Individual"
            >
              Individual</q-radio
            >
            <q-radio
              dark
              v-model="formData.opportunity_client_type"
              val="Company"
            >
              Company/Trust</q-radio
            >
          </div>
          <div class="col">
            <q-radio
              dark=""
              v-model="formData.opportunity_client_no"
              val="1 Person"
            >
              1 Person
            </q-radio>
            <q-radio
              dark
              v-model="formData.opportunity_client_no"
              val="2 Person"
            >
              2 Person
            </q-radio>
          </div>
        </div>
        <div class="row">
          <q-radio
            dark
            v-model="formData.opportunity_martial_status"
            val="notMarried"
          >
            Not Married</q-radio
          >
          <q-radio
            dark
            v-model="formData.opportunity_martial_status"
            val="married-anc"
          >
            Married-ANC</q-radio
          >
          <q-radio
            dark
            v-model="formData.opportunity_martial_status"
            val="married-cop"
          >
            Married-COP</q-radio
          >
        </div>
        <div class="row">
          <div class="col">
            <q-input
              ref="firstnameRef"
              dark
              v-model="formData.opportunity_firstname"
              square
              outlined
              label="First Name*"
              :rules="requiredRules"
            />
          </div>
          <div class="col">
            <q-input
              ref="lastnameRef"
              dark
              v-model="formData.opportunity_lastname"
              square
              outlined
              label="Last Name*"
              :rules="requiredRules"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              ref="idRef"
              dark
              type="number"
              v-model="formData.opportunity_id"
              square
              outlined
              label="ID Number*"
              :rules="requiredRules"
            />
          </div>
          <div class="col">
            <q-input
              dark
              ref="emailRef"
              v-model="formData.opportunity_email"
              type="email"
              square
              outlined
              label="Email*"
              :rules="requiredRules"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <vue-tel-input
              class="mobileNumber"
              v-model="formData.opportunity_mobile"
              @on-input="mobileInput"
            ></vue-tel-input>
          </div>
          <div class="col">
            <vue-tel-input
              class="mobileNumber"
              v-model="formData.opportunity_landline"
              @on-input="landlineInput"
            ></vue-tel-input>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_postal_address"
              square
              type="textarea"
              label="Postal Address"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_residental_address"
              square
              type="textarea"
              label="Residential Address"
            />
          </div>
        </div>
      </q-step>

      <q-step
        dark
        :name="2"
        title="Additional Details"
        icon="account_circle"
        :done="step > 2"
      >
        <div class="row">
          <div class="col">
            <q-radio dark v-model="formData.opportunity_pay_type" val="Bonded">
              Bonded</q-radio
            >
            <q-radio dark v-model="formData.opportunity_pay_type" val="Cash">
              Cash</q-radio
            >
          </div>
          <div class="col">
            <span><b>Floor Plan</b></span>
            <q-radio dark v-model="formData.opportunity_pat_category" val="A">
              A
            </q-radio>
            <q-radio dark v-model="formData.opportunity_pat_category" val="C">
              C
            </q-radio>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_best_price"
              label="Best Price"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_deposite"
              label="Deposit"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_deposite_date"
              mask="date"
              label="yy/mm/dd"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="formData.opportunity_deposite_date">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_parking_base"
              label="Parking Base"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_parking_cost"
              label="Parking Cost"
            />
          </div>
          <div class="col">
            <q-radio
              dark
              v-model="formData.opportunity_stove_option"
              val="standard"
            >
              standard
            </q-radio>
            <q-radio dark v-model="formData.opportunity_stove_option" val="gas">
              Gas
            </q-radio>
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_stove_cost"
              label="Stove Cost"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_extra_cost"
              label="Total Extra Cost"
            />
          </div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_bond_amount"
              label="Bond Amount Required"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_contract_price"
              label="Contract Price"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <q-input
              dark
              v-model="formData.opportunity_additional_cost"
              label="Additional Extra Cost"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_notes"
              square
              autogrow
              type="textarea"
              label="Notes"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_gardenNumber"
              label="Garden Number"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_gardenSize"
              label="Garden Size"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_originalBayNo"
              label="Original Bay Number"
            />
          </div>
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_parkingBayNo"
              label="Parking Bay Number"
            />
          </div>
        </div>
        <div
          class="row"
          style="text-align: center; font-size: 20px; margin-top: 40px"
        >
          <div class="col">
            <b>Beds: 2</b>
          </div>
          <div class="col">
            <b>Bath: 1</b>
          </div>
          <div class="col">
            <b>Enclosed Balcony: 0</b>
          </div>
        </div>
        <div
          class="row"
          style="text-align: center; font-size: 17px; margin-top: 40px"
        >
          <div class="col">
            <div>
              <b>Spare Room: </b>
            </div>
            <div style="margin-top: 15px">
              <q-radio
                dark
                v-model="formData.opportunity_spareRoom"
                val="bedroom"
              >
                Bedroom</q-radio
              >
              <q-radio
                dark
                v-model="formData.opportunity_spareRoom"
                val="study"
              >
                Study</q-radio
              >
            </div>
          </div>
          <div class="col">
            <div>
              <b>Mood: </b>
            </div>
            <div style="margin-top: 15px">
              <q-radio dark v-model="formData.opportunity_mood" val="allure">
                Allure</q-radio
              >
              <q-radio dark v-model="formData.opportunity_mood" val="serene">
                Serene</q-radio
              >
            </div>
          </div>
          <div class="col">
            <div>
              <b>Flooring: </b>
            </div>
            <div style="margin-top: 15px">
              <q-radio dark v-model="formData.opportunity_flooring" val="tiles">
                Tiles</q-radio
              >
              <q-radio
                dark
                v-model="formData.opportunity_flooring"
                val="laminate"
              >
                Laminate</q-radio
              >
            </div>
          </div>
        </div>
      </q-step>

      <q-step
        id="3"
        :name="3"
        title="Attach Required Files"
        icon="upload"
        :done="step > 3"
      >
        <q-form id="formotp">
          <q-file
            dark
            filled
            v-model="formData.opportunity_otp"
            @input="fileUpload"
            label="OTP"
            hint="OTP"
            accept=".jpg, .png, .jpeg"
            clearable
          >
            <template v-slot:before>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <q-file
            dark
            ref="uploadId"
            filled
            v-model="formData.opportunity_uploadId"
            @input="fileUpload"
            label="Upload Id/Passport Photo"
            hint="Upload Id/Passport Photo"
          >
            <template v-slot:before>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <q-file
            filled
            dark
            v-model="formData.opportunity_addressproof"
            @input="fileUpload"
            label="Proof of Address"
            hint="Proof of Address"
          >
            <template v-slot:before>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <q-file
            filled
            dark
            v-model="formData.opportunity_upload_deposite"
            @input="fileUpload"
            label="Upload deposit POP"
            hint="Upload deposit POP"
          >
            <template v-slot:before>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <q-file
            filled
            dark
            v-model="formData.opportunity_upload_statement"
            @input="fileUpload"
            label="Upload Bank Statements"
            hint="Upload Bank Statements"
          >
            <template v-slot:before>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <q-file
            filled
            dark
            v-model="formData.opportunity_upload_lastThree"
            @input="fileUpload"
            label="Upload latest 3 months Payslips"
            hint="Upload latest 3 months Payslips"
          >
            <template v-slot:before>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </q-form>
      </q-step>

      <q-step :name="4" title="Sales Agent" icon="support_agent">
        <div class="row">
          <div class="col">
            <q-input
              dark
              v-model="formData.opportunity_sale_agreement"
              square
              outlined
              label="Sales Agent"
            />
          </div>
          <div class="col">
            <vue-tel-input
              class="salesMobile"
              v-model="formData.opportunity_sale_mobile"
              @on-input="salesMobileInput"
            ></vue-tel-input>
          </div>
        </div>
      </q-step>

      <template v-slot:navigation>
        <span>{{ error }}</span>
        <q-stepper-navigation>
          <q-btn
            @click="submitForm"
            color="primary"
            :label="step === 4 ? 'Submit' : 'Next'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import axios from "axios";

export default {
  name: "App",
  setup() {
    const store = useStore();
    const step = ref(1);
    const firstnameRef = ref(null);
    const lastnameRef = ref(null);
    const idRef = ref(null);
    const emailRef = ref(null);

    const countryCode = null;
    const countryCodeOptions = ["+44", "+91", "+54"];
    const formData = store.state.formData;
    const error = "";
    const load = useQuasar();

    const submitForm = () => {
      console.log("submit clicked", formData);
      if (step.value === 4) {
        console.log("store", store, store.value);
        store.dispatch("postData", formData);
      } else if (step.value === 1) {
        firstnameRef.value?.validate();
        lastnameRef.value?.validate();
        idRef.value?.validate();
        emailRef.value?.validate();

        if (
          firstnameRef.value?.hasError ||
          lastnameRef.value?.hasError ||
          idRef.value?.hasError ||
          emailRef.value?.hasError
        ) {
          // form has error
          console.log("error");
        } else {
          console.log(step, step.value);
          step.value += 1;
        }
      } else {
        step.value += 1;
        // step.value?.next();
      }
    };

    const mobileInput = (number, phoneObject) => {
      console.log(phoneObject.number, "phoneObject");
      return (formData.opportunity_mobile = phoneObject.number);
    };
    const landlineInput = (number, phoneObject) => {
      console.log(phoneObject.number, "phoneObject");
      return (formData.opportunity_landline = phoneObject.number);
    };
    const salesMobileInput = (number, phoneObject) => {
      console.log(phoneObject.number, "phoneObject");
      return (formData.opportunity_sale_mobile = phoneObject.number);
    };

    return {
      step,
      firstnameRef,
      lastnameRef,
      idRef,
      emailRef,
      countryCode,
      countryCodeOptions,
      formData,
      error,
      load,
      requiredRules: [(val) => (val && val.length > 0) || "Field Required"],
      submitForm,
      mobileInput,
      landlineInput,
      salesMobileInput,
    };
  },
  methods: {
    async fileUpload(e) {
      const file = e.target?.files[0];

      let formData = new FormData();
      formData.append("file", file);
      this.load.loading.show();
      await axios
        .post("http://localhost:3008/uploadfile", formData)
        .then((res) => {
          if (res) {
            self.ipAddress = res.data
            this.load.loading.hide();
            console.log(res);
          }
        })
        .catch((error) => {
          this.load.loading.hide();

          console.error(error);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
}
.row {
  margin: 5px 5px;
}
.mobileNumber {
  margin: 9px;
  height: 100%;
  border: 0;
}
.salesMobile {
  height: 56px;
  margin: 9px;
}
.vti__input {
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
}
.vti__dropdown-list {
  background-color: #000 !important;
}
.vti__dropdown-item.highlighted {
  background-color: darkred !important;
}
</style>
