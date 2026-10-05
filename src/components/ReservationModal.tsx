import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Check, MessageSquare, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationDetails } from '../types/restaurant';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationDetails>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: 4,
    seatingPreference: 'family_ac',
    specialRequests: ''
  });

  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingId = `CM-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedBookingId(bookingId);
  };

  const handleWhatsAppNotify = () => {
    const message = `Hello City Madina Restaurant, I would like to reserve a table:%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}%0A` +
      `*Guests:* ${formData.guests} people%0A` +
      `*Seating:* ${formData.seatingPreference === 'family_ac' ? 'AC Family Hall' : formData.seatingPreference === 'highway_view' ? 'Highway View' : 'Main Dining Hall'}%0A` +
      (formData.specialRequests ? `*Special Request:* ${formData.specialRequests}%0A` : '') +
      `*Booking Ref:* ${confirmedBookingId}`;

    window.open(`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-fade-in flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white font-serif-display">
              {confirmedBookingId ? 'Reservation Confirmed' : 'Reserve a Table'}
            </h3>
            <p className="text-xs text-zinc-400">
              City Madina Restaurant · Kuvempu Nagar, Channapatna
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {confirmedBookingId ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Confirmation Code
                </span>
                <h4 className="text-2xl font-mono font-bold text-amber-400 mt-0.5">
                  {confirmedBookingId}
                </h4>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-left text-xs space-y-2 text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Guest:</span>
                  <span className="font-semibold text-white">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Party Size:</span>
                  <span className="font-semibold text-white">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Date & Time:</span>
                  <span className="font-semibold text-white">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Hall:</span>
                  <span className="font-semibold text-white capitalize">{formData.seatingPreference.replace('_', ' ')}</span>
                </div>
              </div>

              <p className="text-xs text-zinc-400">
                We have saved your table reservation. You can also notify our restaurant host on WhatsApp for immediate priority seating upon arrival.
              </p>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={handleWhatsAppNotify}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Notify City Madina on WhatsApp (+91 99866 95215)</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold rounded-xl transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Seating Area Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'family_ac', label: 'AC Family Hall' },
                    { id: 'highway_view', label: 'Highway View' },
                    { id: 'main_hall', label: 'Main Casual Hall' }
                  ].map(seat => (
                    <button
                      key={seat.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, seatingPreference: seat.id as 'family_ac' | 'highway_view' | 'main_hall' })}
                      className={`py-2 px-2 text-xs font-medium rounded-xl border text-center transition-colors ${
                        formData.seatingPreference === seat.id
                          ? 'bg-amber-600/20 border-amber-500 text-amber-300'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {seat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Special Requests / Dietary Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Birthday celebration, mild spice for kids, road trip stop..."
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Table Reservation</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
