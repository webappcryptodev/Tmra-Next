// material
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import RouterLink from 'next/link';
// components
import MainLayout from '@layouts/main';
import Page from '@components/Page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from 'react';
import config from '@configuration';
import GivingSadaqahLayout from '@layouts/givingsadaqah';
import GivingSadaqahTermsContent from '@components/_external-pages/whitelabel/giving-sadaqah/GivingSadaqahTermsContent';
import { GenericPageProps, getOrganizationFromRequest } from '@utils/whitelabel';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

import {
  OrganizationHomePageProps,
  getOrganizationHomePageProps,
} from '@components/_external-pages/whitelabel/OrganizationHomePage';
// import {
//   AboutHero,
//   AboutWhat,
//   AboutTeam,
//   AboutVision,
//   AboutTestimonials
// } from '../components/_external-pages/about';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Terms({ organizationRes, appearanceRes }: OrganizationHomePageProps) {
  const { t } = useTranslation();
  const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

  if (organizationRes?.data?._id === '62414373cf00cca3a830814a') {
    return (
      <GivingSadaqahLayout
        backgroundColor="transparent"
        secondColor="secondary.main"
        imgLogoUrl={`${publicRuntimeConfig.bunny.cdn.urlMedia}/${appearanceRes?.data?.nonprofitAppearance?.logo}`}
        homeURL="/"
        organization={organizationRes?.data}
      >
        <GivingSadaqahTermsContent
          organization={organizationRes?.data}
          appearance={appearanceRes?.data?.nonprofitAppearance}
        />
      </GivingSadaqahLayout>
    );
  }

  return (
    <MainLayout campaignDetails={false}>
      <RootStyle title={`${t('menu.terms')} | ${t('app.name')}`}>
        <Container maxWidth="lg" sx={{ pb: 5 }}>
          <h1 style={{ color: 'var(--heading-color)', marginTop: 32 }}>{t('menu.terms')}</h1>
          <div className="terms-container mt-30">
            {/* Date of Last Revision */}
            <h5 className="mt-20">
              <strong>Date of Last Revision: April 19, 2021</strong>
            </h5>
            <p>
              PLEASE READ THESE TERMS OF USE (THE “<strong>AGREEMENT</strong>” OR THE “
              <strong>TERMS OF USE</strong>“) CAREFULLY BEFORE USING THE SERVICES OFFERED BY Tmra
              INC.
            </p>
            <p>
              Tmra Inc. (referred to throughout as “<strong>us</strong>“, “<strong>we</strong>
              “, “<strong>our</strong>“, etc.) is the owner and operator of the www.tmra.io website,
              an online fundraising platform for nonprofit organizations. These Terms of Service
              apply to the www.tmra.io website, any subdomains thereof, any API integrations or
              widgets we offer, and any other website or webpages we own or operate that include a
              link to this statement (together collectively referred to as the “
              <strong>Website</strong>“). Any party that accesses, uses, or registers with the
              Website (such party referred to throughout in the second person “<strong>you</strong>
              “, “<strong>your</strong>“, etc.) agrees to be contractually bound by these Terms of
              Service (the “<strong>Terms</strong>
              “).
            </p>
            <ol>
              {/* 1. Terms */}
              <li>
                <strong>Terms</strong>. By accessing this web site, you are agreeing to be bound by
                these web site Terms and Conditions of Use, all applicable laws and regulations, and
                agree that you are responsible for compliance with any applicable local laws.This
                agreement sets forth the legally binding terms and conditions for your use of the
                website at www.tmra.io, all other sites owned and operated by Tmra that redirect to
                www.tmra.io, and all subdomains and services operated by the company.If you do not
                agree with any of these terms, you are prohibited from using or accessing this site.
                The materials contained in this website are protected by applicable copyright and
                trade mark law. Tmra is a platform where certain users (“
                <strong>Orgnaizations</strong>” or “<strong>Beneficiaries</strong>”) run campaigns
                to raise money (“
                <strong>Contributions</strong>” or “<strong>Donations</strong>”) from other users or
                companies (“<strong>Donors</strong>” or “<strong>Contributors</strong>” or “
                <strong>Backers</strong>”).
              </li>

              <br />

              {/* 2. Modifications of Terms of Use */}
              <li>
                <strong>Modifications of Terms of Use</strong>. The Company reserves the right, at
                its sole discretion, to modify or replace these Terms of Use, or change, suspend, or
                discontinue the Service (including, but not limited to, the availability of any
                feature, database, or Content) at any time for any reason. The Company may also
                impose limits on certain features and services or restrict your access to parts or
                all of the Service without notice or liability. It is your responsibility to check
                the Terms of Use periodically for changes. Your continued use of the Service
                following the posting of any changes to the Terms of Use constitutes acceptance of
                those changes.
              </li>

              <br />

              {/* 3. User Terms: Donors */}
              <li>
                <strong>User Terms: Donors</strong>
                <ol>
                  <li>
                    <strong>Donations</strong>. In order to contribute to an Organization, Donors
                    will be required to provide Tmra information regarding their credit card or
                    other payment instrument (“Payment Instrument”). You, as a Donor, represent and
                    warrant to Tmra that such information is true and that you are authorized to use
                    the applicable Payment Instrument.Donor commits that their Payment Instrument
                    has sufficient balance for the Donation at the time of pledging to an
                    Organization. You agree that a certain minimum Donation amount may apply, and
                    that all Donation payments are final and will not be refunded unless Tmra, in
                    its sole discretion, agrees to issue a refund. And in the case of a refund, Tmra
                    may or may not return the associated fees with the transaction, including but
                    not limited to Tmra service fees or Payment Processing Partners fees.Tmra uses
                    third-party payment processing partners to bill you through your Payment
                    Instrument for any Donations made, and Donors acknowledge that by contributing a
                    Donation to an Organization, the Donor is agreeing to any and all applicable
                    terms set forth by our payment partners (such as but not limited to Stripe, Inc.
                    and PayPal, Inc.), in addition to these Terms of Service, including{' '}
                    <a href="https://stripe.com/us/legal" target="_blank" rel="noopener noreferrer">
                      Stripe’s terms of service
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://www.paypal.com/ga/webapps/mpp/ua/legalhub-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PayPal’s terms of service
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Donation Types</strong>. Donors may have either, both or none of the
                    following donating options to contribute through to an Organization:
                    <ol>
                      <li>
                        One Time Donation or any term that represents Non-Recurring charge: By
                        choosing this option, Donors accepts a one time charge to their Payment
                        Instrument, immediately or at a later time.
                      </li>
                      <li>
                        Recurring Donation, Monthly Donation or any term that represents a
                        repetitive charge: By choosing this option, Donors accepts an immediate
                        charge to their Payment Instrument and future repetitive charges with the
                        same donation amount.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>Recurring Donations</strong>. Donors may have the option to contribute
                    recurring period Donations (your agreement to make the Donations on a recurring
                    basis, a “Donation Subscription” and each individual Donation made in connection
                    with a Donation Subscription, a “Donation Installment”), and in electing to
                    contribute on a recurring basis, you, as a Donor hereby acknowledge that
                    Donation Subscriptions automatically renew and have a recurring payment feature,
                    and that unless and until you opt out of the auto-renewal of the Donation
                    Subscription, which can be done through the Website, any Donation Subscriptions
                    you have signed up for will be automatically extended for successive renewal
                    periods of the same duration as the initial term originally selected.In
                    connection with each of your Donation Subscriptions, you (i) hereby authorize
                    Tmra to bill your Payment Instrument in the amount of the applicable Donation
                    Installments in advance on a periodic basis until you terminate such periodic
                    payments by opting out of the Donation Subscription through the Website and (ii)
                    accept responsibility for payment of all Donation Installments occurring prior
                    to opt out. Changes to or termination of Donation Subscriptions or Donation
                    Installments will apply only to Donation Installments that take place at a
                    minimum of 72 hours after Tmra receives notice of such change or
                    termination.Tmra is not obligated to provide refunds of any amounts received in
                    connection with previously made Donation Installments in any case. Additionally,
                    by enrolling in any Donation Subscriptions, you acknowledge and agree for any
                    and all such Donation Subscriptions, that (a) the ongoing maintenance and
                    operation of Donation Subscriptions and each Donation Installment are the sole
                    responsibility of, and subject to the sole discretion of, the individual or
                    entity responsible for managing and receiving the Donation Subscription (e.g.
                    the Organization), (b) tax deductibility for individual Donation Installments
                    shall be discussed and agreed on with the Organization and not Tmra, and may
                    vary from a Donation Installment to the next, (c) one or more specific Donation
                    Installment may not be provided to or received by the applicable Organization if
                    such Organization becomes unavailable, unable to accept Donations, or chooses to
                    stop receiving Donations, which may occur for various reasons, such as if the
                    Organization becomes subject to an investigation or is suspended or removed from
                    the Website by Tmra or (d) the amounts actually received by the applicable
                    Organization may differ from one Donation Installment to the next (for example,
                    if the processing fees associated with the Donation Installment change).
                    <p>
                      Your non-termination of a Donation Subscription reaffirms that Tmra is
                      authorized to charge your Payment Instrument for the Donation Subscription in
                      accordance with these terms. This does not waive our right to seek payment
                      directly from you.
                    </p>
                  </li>
                  <li>
                    <strong>Donor Billing</strong>. By submitting their Payment Instrument
                    information and choosing a Donation Type and Amount, Donors agree that Tmra has
                    the right to attempt to bill their Payment Instrument for a One Time Donation or
                    a Donation Installment under a Donation Subscription until the charge is
                    successful. Tmra doesn’t commit to notify the Donor regarding any failing
                    charges on their Payment Instrument but the Donor agrees to receive such
                    notifications.
                  </li>
                </ol>
              </li>

              {/* 4. User Terms: Organizations */}
              <li>
                <strong>User Terms: Organizations</strong>
                <ol>
                  <li>
                    <strong>General Terms :</strong>
                    <ol>
                      <li>
                        Tmra does not offer refunds. The Organization is not required to grant a
                        Backer’s request for a refund unless the Organization is unable or unwilling
                        to fulfill their promised activities.
                      </li>
                      <li>
                        Tmra is not committed to issue refunds for Donors or Organizations at any
                        case and for any reason while Organizations can request us to do so.
                      </li>
                      <li>
                        Organizations should not take any action in reliance on having the money
                        pledged until they have physical access to the money after performing a
                        Withdrawal.
                      </li>
                      <li>
                        Because of occasional failures of payments from Backers, Tmra cannot
                        guarantee the full receipt of the amount pledged minus fees.
                      </li>
                      <li>
                        Tmra and its payments partners will deduct their fees before transmitting
                        proceeds of a campaign. Fees may vary depending on region and other factors.
                      </li>
                      <li>
                        Tmra reserves the right to cancel a pledge at any time and for any reason.
                      </li>
                      <li>
                        Tmra reserves the right to reject, cancel, interrupt, remove, or suspend an
                        Organization’s account at any time and for any reason. Tmra is not liable
                        for any damages as a result of any of those actions. Tmra’s policy is not to
                        comment on the reasons for any of those actions.
                      </li>
                      <li>
                        Organizations are asked to verify their identity and their address before
                        they can withdraw their funds from Tmra.
                      </li>
                      <li>
                        Organization’s verification will happen by the means of, but not limited or
                        restricted to, the delivery of a Passport copy, a recent utility bill, and
                        professional reference letters. Tmra reserves the right to accept or reject
                        according to sole discretion and judgment the verification material provided
                        by the Organization’s Account Owner and may ask for further face-to-face
                        due-diligence.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>Account Holds:</strong>. From time to time, Tmra may (in our sole
                    discretion) place a hold on an Organization account (a “<strong>Hold</strong>
                    “), restricting Withdrawals (defined herein) by an Organization’s Account Owner.
                    Some of the reasons that we may place a Hold on an Organization Account include
                    the following: (i) if we have reason to believe (in our sole discretion) that
                    information provided by an Organization’s Account Owner is false, misleading, or
                    fraudulent, or that funds are being used in a prohibited manner, (ii) if the
                    funds available (as determined by Tmra in its sole discretion) should be
                    provided directly to a person other than the Organization’s Account Owner (such
                    as a legal beneficiary or person entitled by law to act on behalf of a
                    Organization’s Account Owner), (iii) if we have reason to believe that an
                    Organization has violated these Terms of Service, (iv) if Tmra determines that
                    the Organization is colluding with donors to engage in fraudulent activity, (v)
                    if we have reason to believe (in our sole discretion) that there may be
                    suspicious or fraudulent donation activity, or (vi) if required in order to
                    comply with a court order, subpoena, writ, injunction, or as otherwise required
                    under applicable laws and regulations. If you have questions about a Hold we may
                    have placed on your Organization account, or need information about how to
                    resolve the Hold, please contact us at{' '}
                    <a href="mailto:hello@tmra.io">hello@tmra.io</a>.
                  </li>
                  <li>
                    <strong>Rewards:</strong>. The Organization can offer Rewards as courtesy to the
                    Donors. Rewards are not intended to be items available for purchase and Tmra
                    does not guarantee the delivery of Reward in any way. Rewards shall comply with
                    these Terms of Service and the law.
                  </li>
                  <li>
                    <strong>Withdrawing Donations:</strong>. You acknowledge and agree that
                    Donations Withdrawals or Payouts (“Withdrawals”) may not be available to you for
                    use immediately, and Tmra does not guarantee that Withdrawals will be available
                    to you within any specific time frame, and Tmra expressly disclaims any and all
                    responsibility for any delay or inability to access and use Withdrawals at any
                    specified time, and any consequences arising from such delay or inability. You,
                    as an Organization’s Account Owner, are responsible for ensuring that the
                    information you provide to Tmra in order to process a Withdrawal, including your
                    bank account information, is accurate and up to date. Tmra may, at any time, for
                    any reason, without notice, and in its sole discretion, offer or issue a refund
                    of Donation(s) with or without consulting with you, which may comprise the
                    entire amount donated to your Organization. Tmra is not liable to you or to any
                    third party for any claims, damages, costs, losses, or other consequences caused
                    by Tmra issuing refunds, including, but not limited to transaction or overdraft
                    fees.You also acknowledge that you are liable to Tmra for any failure in
                    commitment to your advertised messages including using the Donations for other
                    uses than announced.
                  </li>
                  <li>
                    <strong>Special Notice for International Use; Export Controls:</strong>.
                    Software (defined below) available in connection with the Services and the
                    transmission of applicable data, if any, may be subject to export controls and
                    economic sanctions laws of the United States or other jurisdictions. No Software
                    may be downloaded from the Services or otherwise exported or re-exported in
                    violation of such export control and economic sanctions laws. Downloading or
                    using the Software is at your sole risk. Recognizing the global nature of the
                    Internet, you agree to comply with all local rules and laws regarding your use
                    of the Services, including as it concerns online conduct and acceptable content.
                  </li>
                </ol>
                <p>As an Organization you represent and promise Tmra that you:</p>
                <ol>
                  <li style={{ listStyle: 'none' }}>
                    <ol>
                      <li>
                        Are the authorized representative of the Beneficiary with the authority:
                        <ol>
                          <li>to solicit Contributions for the Beneficiary; and</li>
                          <li>to bind the Beneficiary to the terms of this Agreement.</li>
                        </ol>
                      </li>
                      <li>Will comply with all the rules of Organizations described above</li>
                      <li>
                        Will respond promptly to Donors’ concerns regarding their contributions
                      </li>
                      <li>
                        Ensure all Contributions are disbursed properly and legally to the
                        beneficiary Organization and all Contributions are used as described by the
                        Organization on Tmra.
                      </li>
                      <li>
                        Will reach a mutual satisfactory resolution between you and the Donors in
                        case you are unable to receive your contributions, execute your projects, or
                        deliver the promised activities.
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>

              {/* 5. Use License */}
              <li>
                <strong>Use License</strong>
                <ol>
                  <li>
                    Permission is granted to temporarily download material (information) on Tmra’s
                    web site for personal, non-commercial transitory viewing only. This is the grant
                    of a license, not a transfer of title, and under this license you may not:
                    <ol>
                      <li>modify or copy the materials;</li>
                      <li>
                        use the materials for any commercial purpose, or for any public display
                        (commercial or non-commercial);
                      </li>
                      <li>
                        attempt to decompile or reverse engineer any software contained on Tmra’s
                        web site;
                      </li>
                      <li>
                        remove any copyright or other proprietary notations from the materials; or
                      </li>
                      <li>
                        transfer the materials to another person or “mirror” the materials on any
                        other server.
                      </li>
                    </ol>
                  </li>
                  <li>
                    This license shall automatically terminate if you violate any of these
                    restrictions and may be terminated by Tmra at any time. Upon terminating your
                    viewing of these materials or upon the termination of this license, you must
                    destroy any downloaded materials in your possession whether in electronic or
                    printed format.
                  </li>
                  <li>
                    By way of example, and not limitation, your promise means you will not use the
                    Service:
                    <ol>
                      <li>
                        To offer, sell or distribute:
                        <ol>
                          <li>
                            Controlled substances (such as steroids, narcotics, tobacco products,
                            prescription drugs, marijuana), medical devices or products or services
                            presenting a risk to consumer safety
                          </li>
                          <li>Drug paraphernalia</li>
                          <li>
                            Bullying, harassing, obscene or pornographic items, sexually oriented or
                            explicit materials or services
                          </li>
                          <li>
                            Stocks, bonds or other securities, real estate, insurance or banking or
                            financial services
                          </li>
                          <li>
                            Guns, ammunition, firearms, knives, weapons or accessories regulated by
                            law
                          </li>
                          <li>
                            Items promoting hate, personal injury, death, damage or destruction to
                            property
                          </li>
                          <li>
                            Items infringing or violating others’ Intellectual Property Rights,
                            privacy rights or proprietary rights or wrongfully disclosing
                            confidential information
                          </li>
                        </ol>
                      </li>
                      <li>
                        To engage in, or encourage, promote, facilitate or instruct others to engage
                        in, activities which are illegal or, in our judgment and discretion, result
                        in:
                        <ol>
                          <li>
                            Infringing or violating others’ Intellectual Property Rights and/or
                            privacy rights or wrongfully disclosing or using confidential
                            information
                          </li>
                          <li>
                            Promoting terrorism, abuse, libel, hate, personal injury, property
                            damage, violence, racial intolerance or financial exploitation
                          </li>
                          <li>
                            Causing risk of or actual personal injury or tangible or intangible
                            property damage
                          </li>
                          <li>Defaming an individual or entity</li>
                          <li>
                            A betting, wagering, lottery, raffle, sweepstakes, pyramid, Ponzi or
                            similar scheme or game or contest of chance
                          </li>
                          <li>Unauthorized self-promotion</li>
                          <li>
                            Use of our widgets on sites containing content which is contrary to or
                            violates this Agreement
                          </li>
                        </ol>
                      </li>
                      <li>
                        To:
                        <ol>
                          <li>
                            Harvest or otherwise collect information about others (such as e-mail
                            addresses or other personally identifiable information) without their
                            consent
                          </li>
                          <li>
                            Take any action that imposes, or may impose, in our sole discretion, an
                            unreasonable or disproportionately large load on the infrastructure or
                            otherwise may be disruptive including but not limited to “flooding” any
                            group with posts
                          </li>
                          <li>
                            Upload, post, use or otherwise make available any content that contains
                            software viruses or any other corrupt computer code, files or programs
                            that impair the use of any computer software or hardware or
                            telecommunications equipment
                          </li>
                          <li>
                            SPAM or use or launch any automated system, including without
                            limitation, “robots,” “spiders,” “offline readers,” etc., that accesses
                            the Service in a manner that sends more request messages to the Tmra
                            servers than a human can reasonably produce in the same period of time
                            by using a conventional on-line web browser
                          </li>
                          <li>
                            Attempt to interfere with, compromise the system integrity or security
                            or decipher any transmissions to or from the servers running the Service
                            or otherwise interfere with the proper working of the Service or bypass
                            measures to prevent or restrict access to the Service
                          </li>
                          <li>
                            Impersonate another person or otherwise misrepresent your affiliation
                            with a person or entity, conduct fraud, hide or attempt to hide your
                            identity
                          </li>
                          <li>
                            Make any false or misleading Post (such as false or misleading
                            information in the Campaign, in your Campaign Profile (such as
                            misrepresenting the Beneficiary or Campaign purpose) or in a comment)
                          </li>
                        </ol>
                      </li>
                    </ol>
                    <p>
                      You agree that you are responsible for protecting yourself from member content
                      on Tmra that is perceived to be harmful. Tmra is not liable to any disputes
                      between members.
                    </p>
                    <p>
                      Notwithstanding the foregoing, you acknowledge and agree that Tmra may, but is
                      not obligated, in its sole discretion and judgment, to:
                    </p>
                    <ol>
                      <li>verify your use at any time as an Organization or Donor</li>
                      <li>
                        permanently or temporarily terminate, suspend, or otherwise refuse to permit
                        your access to or use of the Service or your account(s) or to remove any
                        Member Content, Posts or other content or block any individual or entity for
                        any reason (or no reason at all)
                      </li>
                      <li>
                        delay or withhold the payment of or reverse or refund any Contributions or
                        other amounts
                      </li>
                      <li>
                        all without notice and without liability for any damages and without
                        necessarily consulting any other parties. Upon termination for any reason,
                        you continue to be bound by this Agreement.
                      </li>
                    </ol>
                    <p>
                      Discrepancies in or false or misleading statements or misrepresentations as to
                      the Campaign, Beneficiary or uses of Contributions may result in Contributions
                      being refunded and/or accounts being suspended or reversed. If Contributions
                      have been disbursed to you or the Beneficiary, you and the Beneficiary will
                      ensure that all Contributions are refunded promptly to all Contributors
                      without deduction for any fees. These fees will be payable by the
                      Organization.
                    </p>
                  </li>
                  <li>
                    <strong>Disclaimer</strong>. The materials on Tmra’s web site are provided “as
                    is”. Tmra makes no warranties, expressed or implied, and hereby disclaims and
                    negates all other warranties, including without limitation, implied warranties
                    or conditions of merchantability, fitness for a particular purpose, or
                    non-infringement of intellectual property or other violation of rights. Further,
                    Tmra does not warrant or make any representations concerning the accuracy,
                    likely results, or reliability of the use of the materials on its Internet web
                    site or otherwise relating to such materials or on any sites linked to this
                    site.
                  </li>
                </ol>
              </li>

              {/* 6. Liability */}
              <li>
                <strong>Liability</strong>
                <ol>
                  <li>
                    <strong>Waiver of Warranties.</strong>. We disclaim all warranties, express,
                    implied, statutory, or otherwise, concerning the Website to the fullest extent
                    allowed by applicable law. This waiver includes, but is not limited to, all
                    warranties of merchantability, fitness for a particular purpose,
                    non-infringement, and accuracy of information. We make no warranties concerning
                    continuity of service, the security of the Website, or that the Website will be
                    error free. We offer the Website and the features and services contained therein
                    “AS IS” and “WITH ALL FAULTS.”
                  </li>
                  <li>
                    <strong>Taxes.</strong> You understand that the party you transact with through
                    the Website is the one that sets the tax language in any receipt you receive. We
                    make no representations about the nature of any transaction you make through the
                    Website. Always consult the organization you are transacting with and a
                    qualified financial advisor prior to claiming a deduction on your taxes.
                  </li>
                  <li>
                    <strong>Release.</strong> You hereby release us, our successors and assigns, our
                    affiliates, and each of the foregoing’s respective directors, officers,
                    employees, and agents (collectively, the “<strong>Releasees</strong>“) from any
                    and all liability, costs, expenses, losses, damages (including damage to
                    property or personal injury or death), and claims, whether known or unknown,
                    which may arise from (i) you hosting, participating in, attending, or
                    authorizing an event posted on the Website (including events you authorize your
                    supporters to advertise on the Website) or (ii) from the acts or omissions of
                    third parties you interact with through the Website (collectively the “
                    <strong>Released Claims</strong>“).
                  </li>
                  <li>
                    <strong>Limitation of Liability.</strong> In no event shall Tmra, our officers,
                    directors, employees and agents be liable to you for special, consequential,
                    indirect, punitive, exemplary or incidental damages (including, without
                    limitation, lost revenues or profits, data, or loss of goodwill), regardless of
                    the cause, legal theory, or cause of action, even if we have been advised of the
                    likelihood thereof. You acknowledge that the foregoing limitations are an
                    essential basis of the bargain we have reached and that they will apply
                    notwithstanding any failure of essential purpose of any limited remedy.
                  </li>
                  <li>
                    <strong>Indemnification.</strong> You agree to hold the Releasees harmless and
                    to defend and indemnify each of them for all costs, expenses (including
                    reasonable attorney’s fees), damages, and liability from third party claims,
                    which arise from, or relate to, your use of the Website or your breach of these
                    Terms.
                  </li>
                </ol>
              </li>

              {/* 7. Revisions and Errata */}
              <li>
                <strong>Revisions and Errata</strong>. The materials appearing on Tmra’s web site
                could include technical, typographical, or photographic errors. Tmra does not
                warrant that any of the materials on its web site are accurate, complete, or
                current. Tmra may make changes to the materials contained on its web site at any
                time without notice. Tmra does not, however, make any commitment to update the
                materials.
              </li>

              {/* 8. Links */}
              <li>
                <strong>Links</strong>. Tmra has not reviewed all of the sites linked to its
                Internet web site and is not responsible for the contents of any such linked site.
                The inclusion of any link does not imply endorsement by Tmra of the site. Use of any
                such linked web site is at the user’s own risk.
              </li>

              {/* 9. Site Terms of Use Modifications */}
              <li>
                <strong>Site Terms of Use Modifications</strong>. Tmra may revise these terms of use
                for its web site at any time without notice. By using this web site you are agreeing
                to be bound by the current version of these Terms and Conditions of Use.
              </li>

              {/* 10. Governing Law */}
              <li>
                <strong>Governing Law</strong>. Any claim relating to Tmra’s web site shall be
                governed by the laws of the State of Delaware, USA without regard to its conflict of
                law provisions.
              </li>

              {/* 11. Privacy Policy */}
              <li>
                <strong>Privacy Policy</strong>. You accept our Privacy Policy, which you may view
                in full by <RouterLink href="/privacy">clicking here</RouterLink>.
              </li>
            </ol>
          </div>
        </Container>
      </RootStyle>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps<OrganizationHomePageProps> = async ({
  locale,
  req,
  res,
}) => {
  const organization = await getOrganizationFromRequest(req);
  const organizationHomePageProps = await getOrganizationHomePageProps({
    organizationId: organization?.id,
  });
  res.statusCode = organizationHomePageProps?.statusCode;

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
      ...organizationHomePageProps,
    },
  };
};
