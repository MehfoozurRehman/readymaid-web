import React from "react";
import { benifitsjumbotron } from "../assets";
import { benfitsFeaturesData } from "../constants/benfitsFeaturesData";
import { BenifitsFeatureEntry } from "../components/BenifitsFeatureEntry";
import smartsolution from "../assets/smart solution.png";

export default function Benifits() {
  return (
    <>
      <div className="about__jumbotron">
        <img
          src={benifitsjumbotron}
          alt="benifitsjumbotron"
          className="about__jumbotron__img"
        />
        <div className="about__jumbotron__overlay">
          <div className="about__jumbotron__overlay__heading">
            Benefits to Customers
          </div>
          <div className="about__jumbotron__overlay__info">
            Our customers are our most important assets. They are more than a
            family and we extend our all-out support to make their journey with
            us a memorable and comfortable one.
          </div>
        </div>
      </div>
      <div className="benefits__features">
        {benfitsFeaturesData.map((feature) => (
          <BenifitsFeatureEntry
            key={JSON.stringify(feature)}
            feature={feature}
          />
        ))}
      </div>
      <div className="benifits__safty">
        <div className="benifits__safty__content">
          <div className="benifits__safty__content_heading">Safety for Customers </div>
          <div className="benifits__safty__content__entries">
            <div className="benifits__safty__content__entries__entry">
              <div className="benifits__safty__content__entries__entry_svg"><svg xmlns="http://www.w3.org/2000/svg" width="56.896" height="54.237" viewBox="0 0 56.896 54.237">
  <g id="Group_4361" data-name="Group 4361" transform="translate(-10006.49 10957.865)">
    <path id="Path_10050" data-name="Path 10050" d="M1493.993-93.169c1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.225-2.578c4.47.007,8.941-.007,13.411.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.759,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.846,1.172.591.434,1.165,1.21,1.777,1.242a40.9,40.9,0,0,0,7.944-.046A8.679,8.679,0,0,0,1523.021-94c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519,3.408,3.408,0,0,1,2.473,1.472,2.646,2.646,0,0,1-.267,2.459c-3.675,4.382-7.408,8.721-11.27,12.938a8.985,8.985,0,0,1-7.363,2.8c-5.511-.194-11.034-.11-16.551-.018a2.662,2.662,0,0,1-2.766-1.641C1496.81-88.445,1495.418-90.7,1493.993-93.169Z" transform="translate(8524.16 -10828.409)" fill="#3cb149" stroke="#fff" stroke-width="0.5"/>
    <path id="Path_10052" data-name="Path 10052" d="M1505.215-175.546c-2.321-2.315-5.741-2.135-8.15.469-1.826,1.974-3.609,3.987-5.494,6.075-2.994-4.065-1.513-8.445-1.623-12.549-.114-4.258.431-8.533.7-13.016l-19.587-5.255-1.968,7.277,12.192,3.348-.088.49h-12.351v15.371l-8.748,7.105c-.811-1.91-2.122-2.091-3.922-.876-1.558,1.052-3.227,1.946-4.884,2.841-1.512.816-1.673,1.868-.845,3.284q4.123,7.05,8.186,14.135c.8,1.4,1.8,1.589,3.125.795,1.558-.93,3.111-1.877,4.72-2.711,1.451-.752,2.667-1.555,1.816-3.567,5.984,0,11.64-.1,17.29.041a9.822,9.822,0,0,0,7.8-2.9q6.428-6.87,12.479-14.09C1507.476-171.2,1507-173.766,1505.215-175.546Zm-33.025-18.768.664-2.385,15.353,4.1-.662,2.4Zm-.651,8.108h15.7c.035.777.065,1.452.1,2.271h-15.8Zm15.813,5.06c-.043.85-.077,1.523-.116,2.287h-15.685v-2.287Zm-15.855,5.02h15.746v2.27H1471.5Zm-10.8,27.748-7.958-13.75,5.054-2.931,7.952,13.771Zm42.917-22.165c-3.675,4.382-7.408,8.721-11.27,12.938a8.984,8.984,0,0,1-7.362,2.8c-3.505-.123-7.015-.134-10.825-.1-1.709.015-3.718.048-5.726.081a2.661,2.661,0,0,1-2.766-1.641c-1.233-2.343-2.625-4.6-4.05-7.066,1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.226-2.578c4.47.007,8.94-.007,13.41.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.76,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.847,1.172.591.434,1.165,1.21,1.776,1.242a40.9,40.9,0,0,0,7.945-.046,8.679,8.679,0,0,0,4.457-2.306c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519A3.408,3.408,0,0,1,1503.88-173,2.645,2.645,0,0,1,1503.613-170.544Z" transform="translate(8556.539 -10758.043)" fill="#3cb149"/>
  </g>
</svg>
</div>
 
 <div className="benifits__safty__content__entries_heading">Trained Staff</div>
 <div className="benifits__safty__content__entries_para">In case the provided resource is on leaves Better treatment at workplace by the client (Company will ensure this)</div>

          
               
              

            </div>
            <div className="benifits__safty__content__entries__entry">
              <div className="benifits__safty__content__entries__entry_svg"><svg xmlns="http://www.w3.org/2000/svg" width="56.896" height="54.237" viewBox="0 0 56.896 54.237">
  <g id="Group_4361" data-name="Group 4361" transform="translate(-10006.49 10957.865)">
    <path id="Path_10050" data-name="Path 10050" d="M1493.993-93.169c1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.225-2.578c4.47.007,8.941-.007,13.411.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.759,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.846,1.172.591.434,1.165,1.21,1.777,1.242a40.9,40.9,0,0,0,7.944-.046A8.679,8.679,0,0,0,1523.021-94c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519,3.408,3.408,0,0,1,2.473,1.472,2.646,2.646,0,0,1-.267,2.459c-3.675,4.382-7.408,8.721-11.27,12.938a8.985,8.985,0,0,1-7.363,2.8c-5.511-.194-11.034-.11-16.551-.018a2.662,2.662,0,0,1-2.766-1.641C1496.81-88.445,1495.418-90.7,1493.993-93.169Z" transform="translate(8524.16 -10828.409)" fill="#3cb149" stroke="#fff" stroke-width="0.5"/>
    <path id="Path_10052" data-name="Path 10052" d="M1505.215-175.546c-2.321-2.315-5.741-2.135-8.15.469-1.826,1.974-3.609,3.987-5.494,6.075-2.994-4.065-1.513-8.445-1.623-12.549-.114-4.258.431-8.533.7-13.016l-19.587-5.255-1.968,7.277,12.192,3.348-.088.49h-12.351v15.371l-8.748,7.105c-.811-1.91-2.122-2.091-3.922-.876-1.558,1.052-3.227,1.946-4.884,2.841-1.512.816-1.673,1.868-.845,3.284q4.123,7.05,8.186,14.135c.8,1.4,1.8,1.589,3.125.795,1.558-.93,3.111-1.877,4.72-2.711,1.451-.752,2.667-1.555,1.816-3.567,5.984,0,11.64-.1,17.29.041a9.822,9.822,0,0,0,7.8-2.9q6.428-6.87,12.479-14.09C1507.476-171.2,1507-173.766,1505.215-175.546Zm-33.025-18.768.664-2.385,15.353,4.1-.662,2.4Zm-.651,8.108h15.7c.035.777.065,1.452.1,2.271h-15.8Zm15.813,5.06c-.043.85-.077,1.523-.116,2.287h-15.685v-2.287Zm-15.855,5.02h15.746v2.27H1471.5Zm-10.8,27.748-7.958-13.75,5.054-2.931,7.952,13.771Zm42.917-22.165c-3.675,4.382-7.408,8.721-11.27,12.938a8.984,8.984,0,0,1-7.362,2.8c-3.505-.123-7.015-.134-10.825-.1-1.709.015-3.718.048-5.726.081a2.661,2.661,0,0,1-2.766-1.641c-1.233-2.343-2.625-4.6-4.05-7.066,1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.226-2.578c4.47.007,8.94-.007,13.41.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.76,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.847,1.172.591.434,1.165,1.21,1.776,1.242a40.9,40.9,0,0,0,7.945-.046,8.679,8.679,0,0,0,4.457-2.306c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519A3.408,3.408,0,0,1,1503.88-173,2.645,2.645,0,0,1,1503.613-170.544Z" transform="translate(8556.539 -10758.043)" fill="#3cb149"/>
  </g>
</svg>
</div>
 
 <div className="benifits__safty__content__entries_heading">Trained Staff</div>
 <div className="benifits__safty__content__entries_para">In case the provided resource is on leaves Better treatment at workplace by the client (Company will ensure this)</div>

          
               
              

            </div>
            <div className="benifits__safty__content__entries__entry">
              <div className="benifits__safty__content__entries__entry_svg"><svg xmlns="http://www.w3.org/2000/svg" width="56.896" height="54.237" viewBox="0 0 56.896 54.237">
  <g id="Group_4361" data-name="Group 4361" transform="translate(-10006.49 10957.865)">
    <path id="Path_10050" data-name="Path 10050" d="M1493.993-93.169c1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.225-2.578c4.47.007,8.941-.007,13.411.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.759,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.846,1.172.591.434,1.165,1.21,1.777,1.242a40.9,40.9,0,0,0,7.944-.046A8.679,8.679,0,0,0,1523.021-94c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519,3.408,3.408,0,0,1,2.473,1.472,2.646,2.646,0,0,1-.267,2.459c-3.675,4.382-7.408,8.721-11.27,12.938a8.985,8.985,0,0,1-7.363,2.8c-5.511-.194-11.034-.11-16.551-.018a2.662,2.662,0,0,1-2.766-1.641C1496.81-88.445,1495.418-90.7,1493.993-93.169Z" transform="translate(8524.16 -10828.409)" fill="#3cb149" stroke="#fff" stroke-width="0.5"/>
    <path id="Path_10052" data-name="Path 10052" d="M1505.215-175.546c-2.321-2.315-5.741-2.135-8.15.469-1.826,1.974-3.609,3.987-5.494,6.075-2.994-4.065-1.513-8.445-1.623-12.549-.114-4.258.431-8.533.7-13.016l-19.587-5.255-1.968,7.277,12.192,3.348-.088.49h-12.351v15.371l-8.748,7.105c-.811-1.91-2.122-2.091-3.922-.876-1.558,1.052-3.227,1.946-4.884,2.841-1.512.816-1.673,1.868-.845,3.284q4.123,7.05,8.186,14.135c.8,1.4,1.8,1.589,3.125.795,1.558-.93,3.111-1.877,4.72-2.711,1.451-.752,2.667-1.555,1.816-3.567,5.984,0,11.64-.1,17.29.041a9.822,9.822,0,0,0,7.8-2.9q6.428-6.87,12.479-14.09C1507.476-171.2,1507-173.766,1505.215-175.546Zm-33.025-18.768.664-2.385,15.353,4.1-.662,2.4Zm-.651,8.108h15.7c.035.777.065,1.452.1,2.271h-15.8Zm15.813,5.06c-.043.85-.077,1.523-.116,2.287h-15.685v-2.287Zm-15.855,5.02h15.746v2.27H1471.5Zm-10.8,27.748-7.958-13.75,5.054-2.931,7.952,13.771Zm42.917-22.165c-3.675,4.382-7.408,8.721-11.27,12.938a8.984,8.984,0,0,1-7.362,2.8c-3.505-.123-7.015-.134-10.825-.1-1.709.015-3.718.048-5.726.081a2.661,2.661,0,0,1-2.766-1.641c-1.233-2.343-2.625-4.6-4.05-7.066,1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.226-2.578c4.47.007,8.94-.007,13.41.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.76,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.847,1.172.591.434,1.165,1.21,1.776,1.242a40.9,40.9,0,0,0,7.945-.046,8.679,8.679,0,0,0,4.457-2.306c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519A3.408,3.408,0,0,1,1503.88-173,2.645,2.645,0,0,1,1503.613-170.544Z" transform="translate(8556.539 -10758.043)" fill="#3cb149"/>
  </g>
</svg>
</div>
 
 <div className="benifits__safty__content__entries_heading">Trained Staff</div>
 <div className="benifits__safty__content__entries_para">In case the provided resource is on leaves Better treatment at workplace by the client (Company will ensure this)</div>

          
               
              

            </div>
            <div className="benifits__safty__content__entries__entry">
              <div className="benifits__safty__content__entries__entry_svg"><svg xmlns="http://www.w3.org/2000/svg" width="56.896" height="54.237" viewBox="0 0 56.896 54.237">
  <g id="Group_4361" data-name="Group 4361" transform="translate(-10006.49 10957.865)">
    <path id="Path_10050" data-name="Path 10050" d="M1493.993-93.169c1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.225-2.578c4.47.007,8.941-.007,13.411.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.759,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.846,1.172.591.434,1.165,1.21,1.777,1.242a40.9,40.9,0,0,0,7.944-.046A8.679,8.679,0,0,0,1523.021-94c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519,3.408,3.408,0,0,1,2.473,1.472,2.646,2.646,0,0,1-.267,2.459c-3.675,4.382-7.408,8.721-11.27,12.938a8.985,8.985,0,0,1-7.363,2.8c-5.511-.194-11.034-.11-16.551-.018a2.662,2.662,0,0,1-2.766-1.641C1496.81-88.445,1495.418-90.7,1493.993-93.169Z" transform="translate(8524.16 -10828.409)" fill="#3cb149" stroke="#fff" stroke-width="0.5"/>
    <path id="Path_10052" data-name="Path 10052" d="M1505.215-175.546c-2.321-2.315-5.741-2.135-8.15.469-1.826,1.974-3.609,3.987-5.494,6.075-2.994-4.065-1.513-8.445-1.623-12.549-.114-4.258.431-8.533.7-13.016l-19.587-5.255-1.968,7.277,12.192,3.348-.088.49h-12.351v15.371l-8.748,7.105c-.811-1.91-2.122-2.091-3.922-.876-1.558,1.052-3.227,1.946-4.884,2.841-1.512.816-1.673,1.868-.845,3.284q4.123,7.05,8.186,14.135c.8,1.4,1.8,1.589,3.125.795,1.558-.93,3.111-1.877,4.72-2.711,1.451-.752,2.667-1.555,1.816-3.567,5.984,0,11.64-.1,17.29.041a9.822,9.822,0,0,0,7.8-2.9q6.428-6.87,12.479-14.09C1507.476-171.2,1507-173.766,1505.215-175.546Zm-33.025-18.768.664-2.385,15.353,4.1-.662,2.4Zm-.651,8.108h15.7c.035.777.065,1.452.1,2.271h-15.8Zm15.813,5.06c-.043.85-.077,1.523-.116,2.287h-15.685v-2.287Zm-15.855,5.02h15.746v2.27H1471.5Zm-10.8,27.748-7.958-13.75,5.054-2.931,7.952,13.771Zm42.917-22.165c-3.675,4.382-7.408,8.721-11.27,12.938a8.984,8.984,0,0,1-7.362,2.8c-3.505-.123-7.015-.134-10.825-.1-1.709.015-3.718.048-5.726.081a2.661,2.661,0,0,1-2.766-1.641c-1.233-2.343-2.625-4.6-4.05-7.066,1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.226-2.578c4.47.007,8.94-.007,13.41.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.76,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.847,1.172.591.434,1.165,1.21,1.776,1.242a40.9,40.9,0,0,0,7.945-.046,8.679,8.679,0,0,0,4.457-2.306c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519A3.408,3.408,0,0,1,1503.88-173,2.645,2.645,0,0,1,1503.613-170.544Z" transform="translate(8556.539 -10758.043)" fill="#3cb149"/>
  </g>
</svg>
</div>
 
 <div className="benifits__safty__content__entries_heading">Trained Staff</div>
 <div className="benifits__safty__content__entries_para">In case the provided resource is on leaves Better treatment at workplace by the client (Company will ensure this)</div>

          
               
              

            </div>
            <div className="benifits__safty__content__entries__entry">
              <div className="benifits__safty__content__entries__entry_svg"><svg xmlns="http://www.w3.org/2000/svg" width="56.896" height="54.237" viewBox="0 0 56.896 54.237">
  <g id="Group_4361" data-name="Group 4361" transform="translate(-10006.49 10957.865)">
    <path id="Path_10050" data-name="Path 10050" d="M1493.993-93.169c1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.225-2.578c4.47.007,8.941-.007,13.411.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.759,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.846,1.172.591.434,1.165,1.21,1.777,1.242a40.9,40.9,0,0,0,7.944-.046A8.679,8.679,0,0,0,1523.021-94c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519,3.408,3.408,0,0,1,2.473,1.472,2.646,2.646,0,0,1-.267,2.459c-3.675,4.382-7.408,8.721-11.27,12.938a8.985,8.985,0,0,1-7.363,2.8c-5.511-.194-11.034-.11-16.551-.018a2.662,2.662,0,0,1-2.766-1.641C1496.81-88.445,1495.418-90.7,1493.993-93.169Z" transform="translate(8524.16 -10828.409)" fill="#3cb149" stroke="#fff" stroke-width="0.5"/>
    <path id="Path_10052" data-name="Path 10052" d="M1505.215-175.546c-2.321-2.315-5.741-2.135-8.15.469-1.826,1.974-3.609,3.987-5.494,6.075-2.994-4.065-1.513-8.445-1.623-12.549-.114-4.258.431-8.533.7-13.016l-19.587-5.255-1.968,7.277,12.192,3.348-.088.49h-12.351v15.371l-8.748,7.105c-.811-1.91-2.122-2.091-3.922-.876-1.558,1.052-3.227,1.946-4.884,2.841-1.512.816-1.673,1.868-.845,3.284q4.123,7.05,8.186,14.135c.8,1.4,1.8,1.589,3.125.795,1.558-.93,3.111-1.877,4.72-2.711,1.451-.752,2.667-1.555,1.816-3.567,5.984,0,11.64-.1,17.29.041a9.822,9.822,0,0,0,7.8-2.9q6.428-6.87,12.479-14.09C1507.476-171.2,1507-173.766,1505.215-175.546Zm-33.025-18.768.664-2.385,15.353,4.1-.662,2.4Zm-.651,8.108h15.7c.035.777.065,1.452.1,2.271h-15.8Zm15.813,5.06c-.043.85-.077,1.523-.116,2.287h-15.685v-2.287Zm-15.855,5.02h15.746v2.27H1471.5Zm-10.8,27.748-7.958-13.75,5.054-2.931,7.952,13.771Zm42.917-22.165c-3.675,4.382-7.408,8.721-11.27,12.938a8.984,8.984,0,0,1-7.362,2.8c-3.505-.123-7.015-.134-10.825-.1-1.709.015-3.718.048-5.726.081a2.661,2.661,0,0,1-2.766-1.641c-1.233-2.343-2.625-4.6-4.05-7.066,1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.226-2.578c4.47.007,8.94-.007,13.41.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.76,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.847,1.172.591.434,1.165,1.21,1.776,1.242a40.9,40.9,0,0,0,7.945-.046,8.679,8.679,0,0,0,4.457-2.306c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519A3.408,3.408,0,0,1,1503.88-173,2.645,2.645,0,0,1,1503.613-170.544Z" transform="translate(8556.539 -10758.043)" fill="#3cb149"/>
  </g>
</svg>
</div>
 
 <div className="benifits__safty__content__entries_heading">Trained Staff</div>
 <div className="benifits__safty__content__entries_para">In case the provided resource is on leaves Better treatment at workplace by the client (Company will ensure this)</div>

          
               
              

            </div>

          </div>


        
  
        </div>
      </div>


<div className="Readymaid__Smart__Solution">
  <img className="Readymaid__Smart__Solution_pic" src={smartsolution} alt="" />
     <div className="Readymaid__Smart__Solution_overlay">
      <div className="Readymaid__Smart__Solution_overlay__heading">Readymaid Smart Solution</div>
      <div className="Readymaid__Smart__Solution_overlay__para">It is a unique smart solution designed to cater the needs of our esteemed corporate clients. </div>


     </div>
  

</div>


<div className="readymaid_app_card">
  <div className="readymaid_app_card_left">
    <div className="readymaid_app_card_left_para">Our aim is to take the hassle of managing Human Resources away from you in a unique, technologically advanced & convenient way so you can dedicatedly focus on the core business & its expansion.</div>
  </div>
  <div className="readymaid_app_card_right">
    <div className="readymaid_app_card_right_card">
      <div className="readymaid_app_card_right_card_heading">Readymaid App</div>
      <div className="readymaid_app_card_right_card_paragraph">It is what makes us different from our competitors. A smart App for our corporate clients having following features
</div>
      <div className="readymaid_app_card_right_card_linea"><span>a.</span>Personalized business hub on the App </div>
      <div className="readymaid_app_card_right_card_linea"><span>b.</span> Request additional Human Resource demand just by clicking a few tabs
</div>
      <div className="readymaid_app_card_right_card_linea"><span>c.</span> Get immediate response on the App & Website
</div>
      <div className="readymaid_app_card_right_card_linea"><span>d.</span>Complete detail of resources on the personalized hub
</div>
      <div className="readymaid_app_card_right_card_linea"><span>e.</span>Number of Reports just a click away
</div>
      <div className="readymaid_app_card_right_card_linea"><span>f.</span>24/7 dedicated helpline

</div>
<div className="readymaid_app_card_right_card_website">Readymaid Website</div>
<div className="readymaid_app_card_left_web_para">A dedicated personalized business hub at the website having all the features detailed above</div>


      
    </div>

  </div>





</div>




    </>
  );
}
