import React from "react";
import { benifitsjumbotron } from "../assets";
import { benfitsFeaturesData } from "../constants/benfitsFeaturesData";
import { BenifitsFeatureEntry } from "../components/BenifitsFeatureEntry";

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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor harum
          ipsam dolorum dolore dolorem nemo tenetur, quod maiores, deleniti
          exercitationem deserunt modi voluptates voluptas accusantium atque!
          Exercitationem fugiat nisi veniam repellat laborum dicta facere
          provident consequuntur aliquid quia similique nemo maiores quae ullam
          possimus hic velit temporibus voluptatum id, itaque earum sit.
          Expedita veritatis ducimus ratione ab sed voluptatum possimus adipisci
          recusandae quos cum eveniet quod modi cumque corrupti magnam
          reprehenderit voluptas a consequatur, dolor maxime quo illum!
          Officiis, minima. Fugiat corporis illo, eaque sequi nesciunt ipsa
          quibusdam impedit explicabo delectus, doloremque vel? Amet dolor
          reiciendis veniam sequi ratione aspernatur distinctio, ab neque
          repellat aut explicabo, fuga eaque ullam beatae illo et architecto
          sint. Perferendis corporis ipsam rerum aliquam est a iste modi
          voluptas, quam esse, eligendi error laboriosam quod voluptates optio.
          Eligendi vitae sunt incidunt neque saepe dolore consequatur, dolorum
          officiis eum aperiam, odio eveniet eius quis nostrum. Explicabo sit
          beatae totam exercitationem, minima delectus mollitia accusamus modi
          consequuntur libero. Veniam reiciendis dignissimos placeat,
          consequatur minus modi. Veniam assumenda natus, incidunt tenetur eaque
          id voluptas, dicta delectus facere nostrum quisquam tempore ut
          adipisci laudantium perspiciatis architecto illo pariatur nihil
          explicabo! Porro sint similique deleniti eligendi architecto
          blanditiis animi alias sed. Explicabo veritatis totam laboriosam.
          Reiciendis nostrum doloremque dolore, enim cumque reprehenderit fugit
          magni neque id, necessitatibus quis distinctio, atque sit modi
          corporis. Culpa aliquam eaque, quisquam atque at accusamus perferendis
          cum? Debitis velit maxime eum dicta odit perferendis ut inventore.
          Laboriosam optio, doloribus aliquam cumque ea minima deserunt
          perspiciatis vel, incidunt assumenda aut voluptates officia omnis vero
          similique itaque dolorem aliquid odio nemo? Natus officia, a cumque
          eos, quasi aliquam perferendis expedita sequi sint, veniam tempora ad
          dolores eligendi. Doloremque laboriosam officiis veritatis quo
          voluptatem! Molestiae dolor, perferendis animi labore architecto
          alias. Alias quaerat porro aut inventore, distinctio, voluptatum amet
          qui iusto incidunt, illum nostrum obcaecati. Eius sapiente velit
          tempore ipsam eaque repudiandae est ducimus vero in tenetur! Molestiae
          nisi vero laborum cumque reiciendis adipisci voluptas? Vitae sed harum
          facere doloribus doloremque maiores quasi laborum quaerat sunt eos?
          Magni minus iure dolorem ea asperiores dolores sint, aut dignissimos
          praesentium quam blanditiis omnis odit expedita necessitatibus fuga
          quis rem quibusdam soluta nisi minima porro! Sed consequuntur
          perspiciatis voluptatibus, eveniet quod est nisi officia incidunt
          vitae unde? Nulla, ipsum repellendus. Dolorum ipsum doloremque
          explicabo doloribus veritatis inventore blanditiis eius saepe
          assumenda atque quaerat, iusto corrupti id! Sit esse dolor eaque
          tempora quos fugit expedita quasi non ullam, perspiciatis quaerat
          optio corporis iusto excepturi, accusantium, debitis voluptatibus
          nobis eligendi aliquid minus nam officia. Laboriosam explicabo
          blanditiis nostrum sequi reprehenderit, dicta accusantium dolorum
          repellendus aperiam eius quod, ducimus corrupti rerum, perferendis
          facere? Dolorum, inventore. Voluptas alias voluptatem quibusdam illum
          nesciunt, quo vitae debitis nihil, tempore id commodi fugit incidunt
          veritatis. Obcaecati, ducimus eos. Eius ipsa corrupti dolorem,
          officiis ad quo adipisci itaque nulla? Dolor deserunt tempora esse
          consectetur sit, beatae assumenda perferendis fuga fugiat, ex magnam
          eius similique provident qui laudantium dolorum labore saepe ratione
          sunt illum repellendus pariatur accusamus? Voluptatibus, aspernatur
          architecto.
        </div>
      </div>
    </>
  );
}
