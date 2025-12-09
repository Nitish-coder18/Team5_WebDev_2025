import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import Bhagat from '../assets/Bhagat.jpg';
import Chandrashekhar from '../assets/chandrasekhar.jpg';
import Subhash from '../assets/subhash.jpg';
import MahatmaGandhi from '../assets/mahatmagandhi.jpg';
import Rani from '../assets/rani.jpg';
import Jawahar from '../assets/jawaharlal lal nehru.jpg';


const Idolsdescription = {
  1: { name: "Mahatma Gandhi", image: MahatmaGandhi, year: "1869-1948", description: `Mohandas Karamchand Gandhi, lovingly called Mahatma Gandhi or the "Father of the Nation," was the heart and soul of India’s non-violent freedom movement. Born on October 2, 1869, in Porbandar, Gujarat, Gandhi’s life and principles inspired millions across India and the world to stand for justice through peaceful means.

Gandhi pioneered the concepts of Ahimsa (non-violence) and Satyagraha (truth-force), advocating that love and truth are mightier than weapons. He led monumental movements like the Non-Cooperation Movement, Salt March (Dandi Satyagraha), and Quit India Movement, uniting Indians of all backgrounds to peacefully resist British oppression.

His personal lifestyle—simple clothes made from hand-spun khadi, vegetarianism, and humility—symbolized self-reliance, compassion, and solidarity with India’s poor. He also fought tirelessly against social evils like untouchability and worked towards communal harmony.

Despite multiple imprisonments and hardships, Gandhi’s faith in peaceful resistance never wavered. His belief that “an eye for an eye will only make the whole world blind” reshaped the way freedom was sought—not through violence, but through moral strength.

Famous Quotes by Mahatma Gandhi:

“Be the change that you wish to see in the world.”

“The best way to find yourself is to lose yourself in the service of others.”

“An eye for an eye only ends up making the whole world blind.”

“Strength does not come from physical capacity. It comes from an indomitable will.”

“You may never know what results come from your actions, but if you do nothing, there will be no results.”

Mahatma Gandhi’s timeless legacy continues to inspire movements for peace, justice, and human rights worldwide.
` },

  2: { name: "Subhash Chandra Bose", image: Subhash, year: "1897-1945", description: `Subhas Chandra Bose, affectionately known as "Netaji," was a revolutionary leader who played a pivotal role in India’s struggle for independence. Born on January 23, 1897, in Cuttack, Odisha, Bose was a brilliant student and an ardent nationalist who believed that India’s freedom could not be won through passive resistance alone.

Rejecting the dominant Gandhian philosophy of non-violence, Bose advocated for a more direct and forceful approach to end British rule. His unwavering patriotism and dynamic leadership galvanized millions of Indians to join the cause. Bose’s most notable achievement was the formation of the Indian National Army (INA), which he revitalized with the help of Indian prisoners of war and expatriates in Southeast Asia. The INA fought valiantly alongside the Japanese forces against the British in World War II, symbolizing India’s uncompromising demand for freedom.

Netaji’s vision extended beyond independence; he dreamt of a free, strong, and secular India, united in its diversity and capable of standing tall on the world stage. His leadership inspired countless young Indians to rise up and take pride in their heritage and rights.

Some of his famous quotes that continue to inspire generations are:

"Give me blood, and I will give you freedom!"

"Freedom is not given — it is taken."

"It is blood alone that can pay the price of freedom. Give me blood and I will give you freedom!"

Though Subhas Chandra Bose’s mysterious disappearance in 1945 left many questions unanswered, his legacy as a fearless patriot and visionary leader endures, reminding us of the power of courage, determination, and sacrifice in the pursuit of justice.` },

  3: { name: "Rani Lakshmibai", image: Rani, year: "1828-1858", description: `Rani Lakshmibai of Jhansi, born as Manikarnika Tambe on November 19, 1828, was one of the most courageous and iconic figures of India’s fight against British colonial rule. Revered as the “Queen of Jhansi,” she epitomized bravery, resilience, and unwavering patriotism during the Indian Rebellion of 1857, also known as the First War of Indian Independence.

After marrying Maharaja Gangadhar Rao Newalkar, the ruler of Jhansi, Manikarnika was named Lakshmibai. Following her husband’s death and the British East India Company’s attempt to annex Jhansi under the Doctrine of Lapse, Rani Lakshmibai took charge as the regent of Jhansi for her adopted son and vowed to protect her kingdom from British domination.

Refusing to surrender, she became a formidable military leader, rallying her troops and inspiring countless others with her fierce determination and skill in warfare. Dressed in warrior attire and wielding a sword, she fought bravely in battles against the British forces, leading from the front with extraordinary valor.

Her resistance during the siege of Jhansi became legendary, and she is remembered for her strategic acumen and indomitable spirit. Rani Lakshmibai’s heroic sacrifice on June 18, 1858, during a fierce battle in Gwalior, made her a martyr and immortalized her as a symbol of women’s empowerment and patriotic fervor.

Rani Lakshmibai’s legacy transcends time, inspiring generations to stand up against oppression and fight for justice and freedom. She remains a beacon of courage and an enduring icon in India’s rich history of resistance.

Famous Quotes by Rani Lakshmibai:

“Main apni Jhansi nahi doongi” (I will not surrender my Jhansi).

“Better to die fighting for freedom than be a prisoner all the days of your life.”

“I shall never surrender or live to be a slave.” ` },

  4: { name: "Jawaharlal Nehru", image: Jawahar, year: "1889-1964", description: `Jawaharlal Nehru (1889–1964) was a towering figure in India’s freedom struggle and the country’s first Prime Minister after independence. Born on November 14, 1889, in Allahabad into a wealthy and politically influential family, Nehru was educated in England, where he studied at Harrow and Cambridge, and later trained as a barrister at the Inner Temple, London.

Deeply influenced by Mahatma Gandhi and the Indian National Congress, Nehru dedicated his life to the cause of India’s independence from British rule. Known for his eloquence, vision, and progressive ideas, he became a prominent leader who championed secularism, democracy, and social justice.

Nehru’s political career was marked by his leadership in the Indian National Congress, where he worked alongside Gandhi and other leaders to mobilize the masses through civil disobedience, non-violent protests, and political dialogue. His commitment to building a modern, democratic, and inclusive India shaped the nation’s policies during its early years as an independent state.

As India’s first Prime Minister from 1947 to 1964, Nehru laid the foundation for the country’s democratic institutions, industrial development, and foreign policy. He emphasized scientific progress, education, and social reforms as pillars of national growth. His vision for a secular India where all communities coexisted peacefully was a guiding principle throughout his life.

Nehru was also a prolific writer and thinker. His works, such as “Discovery of India” and “Glimpses of World History,” reflect his deep understanding of India’s cultural heritage and global history.

Despite facing challenges like partition, communal violence, and economic hardships, Nehru’s leadership helped steer India toward unity, stability, and progress. His legacy as a visionary leader and architect of modern India continues to inspire generations.` },

  5: { name: "Bhagat Singh", image: Bhagat, year: "1907-1931", description: `Bhagat Singh was one of the most influential revolutionaries in India’s struggle for independence, known for his fearless patriotism and unwavering commitment to the cause of freedom. Born on September 28, 1907, in Banga, Punjab, Bhagat Singh grew up in a family deeply involved in the freedom movement, which shaped his early resolve to fight against British colonial rule.

A brilliant student and thinker, Singh rejected the moderate approaches of some freedom fighters and instead embraced revolutionary socialism and armed resistance as necessary means to overthrow the British Empire. He became a symbol of youthful courage and sacrifice, inspiring generations with his bold actions and fearless spirit.

Bhagat Singh is best remembered for his involvement in the 1928 assassination of British police officer John Saunders, which was a protest against the brutal lathi charge that led to the death of nationalist leader Lala Lajpat Rai. Later, Singh and his comrades threw non-lethal bombs in the Central Legislative Assembly in Delhi to make a dramatic statement against repressive laws, deliberately avoiding civilian casualties.

Arrested and tried for his revolutionary activities, Bhagat Singh used the courtroom as a platform to propagate his ideals of liberty, equality, and social justice. His hunger strike in prison brought attention to the inhumane treatment of political prisoners.

On March 23, 1931, at the young age of 23, Bhagat Singh was executed by the British government. His martyrdom sparked nationwide protests and cemented his legacy as a fearless fighter who gave his life for India’s freedom.

Bhagat Singh’s courage, intellect, and unwavering dedication continue to inspire millions, symbolizing the relentless spirit of youth striving for justice and independence.` },

  6: { name: "Chandra Shekhar Azad", image: Chandrashekhar, year: "1906-1931", description: `Chandrashekhar Azad was a great Indian freedom fighter. His fierce patriotism and courage inspired others of his generation to enter freedom struggle. He was the mentor of Bhagat Singh, another great freedom fighter, and along with Bhagat Singh he is considered as one of the greatest revolutionaries that India has produced.

Chandrashekhar Azad was a Bharatiya revolutionary from Allahabad, Uttar Pradesh. He believed that his Dharma was to fight for the Nation. He said a soldier never relinquishes his weapon. He was involved in the Kakori Train Robbery (1926), in the attempt to blow up the Viceroy’s train (1926), and in the shooting of Saunders at Lahore (1928) to avenge the killing of Lala Lajpat Rai. He formed the ‘Hindustan Socialist Republican Association’.  He was an ideal for revolutionaries such as Bhagat Singh, Sukhdev, Batukeshwar Dutt and Rajguru.`}
};


const Details = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const idol = Idolsdescription[id];

  if (!idol) return <div className="text-white">Idol not found</div>;

  return (
    <div className="bg-[#0b0b0b] min-h-screen py-16 px-4 text-gray-200">

      {/* MAIN CONTAINER */}
      <div className="max-w-4xl mx-auto bg-[#141414] p-10 rounded-2xl border border-gray-700 shadow-xl">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-6">
          <span className="text-orange-400">{idol.name}</span>
        </h1>

        {/* Image Box */}
        <div className="w-full flex justify-center mb-6">
          <div className="rounded-xl overflow-hidden border-4 border-gray-700 shadow-lg">
            
            {/* Tricolor Border Top */}
            <div className="h-2 w-full flex">
              <div className="w-1/3 bg-orange-500"></div>
              <div className="w-1/3 bg-white"></div>
              <div className="w-1/3 bg-green-600"></div>
            </div>

            <img 
              src={idol.image} 
              alt={idol.name} 
              className="w-[420px] h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Years */}
        <p className="text-center text-lg text-green-300 mb-5">
          Year: {idol.year}
        </p>

        {/* Description */}
        <p className="leading-8 text-gray-300 text-lg tracking-wide whitespace-pre-line text-justify">
          {idol.description}
        </p>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="
              px-10 py-3 text-xl font-bold rounded-xl
              bg-gradient-to-r from-orange-500 via-white to-green-500 
              text-black shadow-lg hover:scale-105 active:scale-95 
              transition-all duration-300
            "
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default Details;
