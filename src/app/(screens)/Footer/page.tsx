import React from "react";
import Link from "next/link";

const FooterPage = () => {
  return (
    <div className="px-4 py-6 max-w-[85%] md:max-w-[70%]  md:mx-auto text-[#0d3b23] space-y-10">
      {/* About Us */}
      <section id="about">
        <h2 className="text-3xl font-bold mb-3 text-[#006633]">About Us</h2>
        <p>
          <Link href={"/Converters"}><strong>Converthaven.com</strong></Link> is your trusted destination for accurate, fast, and easy-to-use unit conversion tools. Whether you're a student, professional, engineer, or just someone who needs quick conversions, we've got you covered with a wide range of categories including common, scientific, and engineering units.
        </p>
        <p className="mt-4">
          Our mission is to simplify complex conversions and provide an intuitive experience without clutter or confusion. Every converter is carefully curated and verified to ensure precision and reliability.
        </p>
        <p className="mt-4">
          At Converthaven, we're dedicated to continuous improvement, regularly expanding our converter library to support more units, more use cases, and more communities worldwide.
        </p>

        <h3 className="text-xl font-semibold mt-6 text-[#006633]">Contact Us</h3>
        <p>
          For inquiries, suggestions, or feedback, feel free to reach out to us at:{" "}
          <a href="mailto:Support@converthaven.com" className="underline text-blue-700">Support@converthaven.com</a>
        </p>
      </section>

      {/* Privacy Policy */}
      <section id="privacy">
        <h2 className="text-3xl font-bold mb-3 text-[#006633]">Privacy Policy</h2>
        <p>
          Maple Tech International LLC operates the Converthaven.com website, which provides the SERVICE.
        </p>
        <p>
          This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
        </p>
        <p>
          If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Information Collection and Use</h3>
        <p>We take and respect your privacy seriously. We may collect information via cookie or web log. This is to customize services and enhance customer satisfaction.</p>
        
        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Log Data</h3>
        <p>
          We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Cookies and Third Party Advertising</h3>
        <p>
          Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.
        </p>
        <p>
          Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
        </p>
        <p>
          We allow third-party companies to serve ads and/or collect certain anonymous information when you visit our web site. These companies may use non-personally identifiable information (e.g., click stream information, browser type, time and date, subject of advertisements clicked or scrolled over) during your visits to this and other Web sites in order to provide advertisements about goods and services likely to be of greater interest to you. These companies typically use a cookie or third party web beacon to collect this information. To learn more about this behavioral advertising practice or to opt-out of this type of advertising, you can visit{" "}
          <a href="https://optout.networkadvertising.org" target="_blank" className="underline text-blue-700">optout.networkadvertising.org</a>
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Web Forms on Our Site</h3>
        <p>The information you fill and submit by the web forms on our sites, to enable the unit converters to function.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Security</h3>
        <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Links to Other Sites</h3>
        <p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Children's Privacy</h3>
        <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Changes to This Privacy Policy</h3>
        <p>We reserve the right to update this privacy policy with or without notice. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
      </section>

      {/* Terms of Use */}
      <section id="terms">
        <h2 className="text-3xl font-bold mb-3 text-[#006633]">Terms of Use</h2>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Acceptance of Terms</h3>
        <p>
          Maple Tech International LLC. ("Company") provides this website at Converthaven.com (referred to hereafter as "the Website") for use by consumers and businesses. By using the Website in any way, you are agreeing to comply with the Terms of Use. Should you object to any term or condition of the Terms of Use or any guideline of the Website, your only recourse is to immediately discontinue use of the Website.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Changes to the Terms of Use</h3>
        <p>We reserve the right, at our sole discretion, to change, modify, or alter the Terms of Use at any time. Such changes shall become effective immediately upon the posting thereof. The most current version of the Terms of Use will be linked from the footer of the Website. You must review the Terms of Use on a regular basis to keep yourself apprised of any changes.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Conduct</h3>
        <p>You agree not to post any text, files, images, video, audio, or other materials ("Content") or use the Website in any way that:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party;</li>
          <li>violates any state, federal, or other law;</li>
          <li>threatens, harasses, or is libelous;</li>
          <li>is harmful to minors;</li>
          <li>contains self-benefiting advertising or marketing in public areas of the Website that have not been paid for and are not designated for the addition of promotional content;</li>
          <li>produces Software viruses or code harmful to other computers;</li>
          <li>disrupts the normal dialogue of users of the Website;</li>
          <li>employs misleading or false information;</li>
          <li>uses forged headers or other items to manipulate identifiers in order to disguise the origin of Content.</li>
        </ul>
        <p className="mt-2">You agree not to decompile or reverse engineer or otherwise attempt to discover any source code contained in the Website.</p>
        <p className="mt-2">Unless you receive explicit permission, you agree not to reproduce, duplicate, copy, sell, resell, or exploit for any commercial purposes, any aspect of the Website. Any business that registers with a listing or purchases advertising or any other service ("Customer") has the right and permission to manage their listing or purchased advertising or other service to their commercial benefit so long as the codes of conduct above are not violated.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Privacy</h3>
        <p>Please review our Privacy Policy for details on the Company's collection, disclosure, and use of personally identifiable information and privacy matters. Use of the Website is based on your agreement to the Privacy Policy and Terms of Use.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Content</h3>
        <p>This Website and some of the Content on this Website contain links to other resources on the Internet. Such links are provided as aids to assist you in identifying and locating other Internet resources that may be of interest to you, and are not intended to state or imply that Company sponsors, endorses, are affiliated or associated with, or are legally authorized to use any trade name, registered trademark, logo, legal or official seal, or copyrighted symbol that may be reflected in said links.</p>
        <p>Information or conversion results at our Website may be outdated due to the date and the method of the collection or may be incorrect. If you find information or conversion results on the Website that you believe to be in error, please contact us with the specifics and we will investigate the matter and where we are allowed by our data source we will update the information.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Limitations and Termination</h3>
        <p>Company may create limitations of your use of the Website including, but not limited to, the number of times you may access the Website. Limitations can include full termination of your access to the Website and you agree that Company has the right at any time, in its sole discretion, with or without notice, to modify or discontinue the Website (or any part thereof).</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Disclaimer of Warranties</h3>
        <p>THE COMPANY WEBSITE AND ANY INCLUDED SERVICES ARE PROVIDED ON AN "AS IS" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, INCLUDING WITHOUT LIMITATION THE WARRANTIES THAT IT IS FREE OF DEFECTS, ERRORS, VIRUSES, MERCHANTABLE AND THAT IT IS FIT FOR A PARTICULAR PURPOSE OR NON-INFRINGING. YOUR USE OF THE WEBSITE IS AT YOUR OWN RISK.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Limitations of Liability</h3>
        <p>UNDER NO CIRCUMSTANCES SHALL COMPANY BE LIABLE FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, RESULTING FROM ANY ASPECT OF YOUR USE OF THE WEBSITE INCLUDING BUT NOT LIMITED TO DAMAGES THAT ARISE FROM YOUR INABILITY TO USE THE WEBSITE OR THE SERVICE, OR THE INTERRUPTION, MODIFICATION, OR TERMINATION OF THE WEBSITE OR ANY SERVICE OR PART THEREOF.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Jurisdiction</h3>
        <p>The Terms of Use shall be governed by the laws of the State of Texas without regard to its conflict of law provisions. You and Company agree to submit to the personal and exclusive jurisdiction of the courts located within the State of Texas.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Partial Invalidity</h3>
        <p>Any provision of this Terms of Use which is found to be invalid or unenforceable by any court in any jurisdiction shall not affect the validity or enforceability of the provision in other jurisdictions and shall not affect the validity or enforceability of the remaining provisions. The waiver or failure of Company to exercise in any respect any right provided for in this Terms of Use shall not be deemed a waiver of any further right under this Agreement.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">Violation of Terms</h3>
        <p>You agree that monetary damages may not be a sufficient remedy for any breach of this Agreement and that Company shall be entitled, without waiving any other rights or remedies, to seek injunctive or equitable relief as may be deemed proper by a court of competent jurisdiction.</p>

        <h3 className="text-xl font-semibold mt-4 text-[#006633]">General</h3>
        <p>The Terms of Use constitute the entire agreement between you and Company and govern your use of the Website, superseding any prior agreements between you and Company.</p>
      </section>
    </div>
  );
};

export default FooterPage;