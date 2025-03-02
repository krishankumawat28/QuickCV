import React, { useState } from 'react';
import { User, MapPin, Phone, Link as LinkIcon, Trophy, GraduationCap, Heart } from 'lucide-react';

function cr1() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    phone: '',
    email: '',
    location: '',
    portfolio: '',
    experience: {
      title: '',
      company: '',
      period: '',
      location: '',
      description: '',
      highlights: ''
    },
    techStack: '',
    achievements: '',
    certifications: {
      name: '',
      details: ''
    },
    education: {
      degree: '',
      school: '',
      period: ''
    },
    passions: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section?: string, field?: string) => {
    if (section && field) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [field]: e.target.value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <form className="space-y-8">
          {/* Header Section */}
          <div className="bg-orange-500 rounded-lg p-8 text-white">
            <div className="flex justify-between items-start">
              <div className="space-y-4 flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  className="bg-transparent border-b border-white/50 text-2xl font-bold w-full focus:outline-none focus:border-white"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="role"
                  placeholder="The role you are applying for?"
                  className="bg-transparent border-b border-white/50 w-full focus:outline-none focus:border-white"
                  value={formData.role}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="bg-transparent border-b border-white/50 w-full focus:outline-none focus:border-white"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      className="bg-transparent border-b border-white/50 w-full focus:outline-none focus:border-white"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white/70" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold border-b-2 border-orange-500 pb-2 mb-4">EXPERIENCE</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-2 border rounded"
                    value={formData.experience.title}
                    onChange={(e) => handleChange(e, 'experience', 'title')}
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-2 border rounded"
                    value={formData.experience.company}
                    onChange={(e) => handleChange(e, 'experience', 'company')}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Period"
                      className="w-full p-2 border rounded"
                      value={formData.experience.period}
                      onChange={(e) => handleChange(e, 'experience', 'period')}
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full p-2 border rounded"
                      value={formData.experience.location}
                      onChange={(e) => handleChange(e, 'experience', 'location')}
                    />
                  </div>
                  <textarea
                    placeholder="Company Description"
                    className="w-full p-2 border rounded"
                    rows={3}
                    value={formData.experience.description}
                    onChange={(e) => handleChange(e, 'experience', 'description')}
                  />
                  <textarea
                    placeholder="Highlights and accomplishments, using numbers if possible"
                    className="w-full p-2 border rounded"
                    rows={3}
                    value={formData.experience.highlights}
                    onChange={(e) => handleChange(e, 'experience', 'highlights')}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold border-b-2 border-orange-500 pb-2 mb-4">TECH STACK</h2>
                <textarea
                  placeholder="Your Skills"
                  className="w-full p-2 border rounded"
                  rows={4}
                  name="techStack"
                  value={formData.techStack}
                  onChange={handleChange}
                />
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold border-b-2 border-orange-500 pb-2 mb-4">KEY ACHIEVEMENTS</h2>
                <div className="flex items-start space-x-2">
                  <Trophy className="w-5 h-5 text-orange-500 mt-2" />
                  <textarea
                    placeholder="Describe what you did and the impact it had"
                    className="w-full p-2 border rounded"
                    rows={4}
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleChange}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold border-b-2 border-orange-500 pb-2 mb-4">CERTIFICATIONS</h2>
                <input
                  type="text"
                  placeholder="Certificate Name"
                  className="w-full p-2 border rounded mb-2"
                  value={formData.certifications.name}
                  onChange={(e) => handleChange(e, 'certifications', 'name')}
                />
                <input
                  type="text"
                  placeholder="Which institution issued the certificate and when?"
                  className="w-full p-2 border rounded"
                  value={formData.certifications.details}
                  onChange={(e) => handleChange(e, 'certifications', 'details')}
                />
              </section>

              <section>
                <h2 className="text-xl font-bold border-b-2 border-orange-500 pb-2 mb-4">EDUCATION</h2>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Degree and Field of Study"
                    className="w-full p-2 border rounded"
                    value={formData.education.degree}
                    onChange={(e) => handleChange(e, 'education', 'degree')}
                  />
                  <input
                    type="text"
                    placeholder="School or University"
                    className="w-full p-2 border rounded"
                    value={formData.education.school}
                    onChange={(e) => handleChange(e, 'education', 'school')}
                  />
                  <input
                    type="text"
                    placeholder="Date period"
                    className="w-full p-2 border rounded"
                    value={formData.education.period}
                    onChange={(e) => handleChange(e, 'education', 'period')}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold border-b-2 border-orange-500 pb-2 mb-4">PASSIONS</h2>
                <div className="flex items-start space-x-2">
                  <Heart className="w-5 h-5 text-orange-500 mt-2" />
                  <textarea
                    placeholder="Career Interest / Passion"
                    className="w-full p-2 border rounded"
                    rows={3}
                    name="passions"
                    value={formData.passions}
                    onChange={handleChange}
                  />
                </div>
              </section>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default cr1;