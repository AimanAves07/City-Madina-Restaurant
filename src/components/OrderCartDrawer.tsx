import React, { useState } from 'react';
import { 
  X, Plus, Minus, Trash2, ShoppingBag, MessageSquare, Check, ArrowRight, 
  Clock, MapPin, QrCode, CreditCard, Banknote, Smartphone, Copy, CheckCircle2 
} from 'lucide-react';
import { CartItem } from '../types/restaurant';
import { RESTAURANT_INFO } from '../data/restaurantData';
import restaurantLogo from '../assets/images/city_madina_dome_crest_1791175871975.jpg';

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'takeaway' | 'delivery'>('takeaway');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cash' | 'card'>('upi');
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [upiTxnId, setUpiTxnId] = useState<string>('');
  const [copiedUpi, setCopiedUpi] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pickupNote, setPickupNote] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<{ id: string; total: number; method: string } | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const packagingFee = cart.length > 0 ? (orderType === 'delivery' ? 40 : 20) : 0;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + packagingFee + gst;
  const upiId = "9986695215@upi";

  const handleCopyUpi = () => {
    navigator.clipboard?.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const orderId = `CMD-${Math.floor(1000 + Math.random() * 9000)}`;
    const methodLabel = paymentMethod === 'upi' ? 'UPI / QR Scan' : paymentMethod === 'card' ? 'Card on Delivery/Counter' : 'Cash on Delivery/Counter';
    setConfirmedOrder({ id: orderId, total, method: methodLabel });
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let itemsText = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.dish.name}* x${item.quantity} = ₹${item.dish.price * item.quantity}`
      )
      .join('%0A');

    const paymentLabel = paymentMethod === 'upi' ? `UPI (Scan & Pay)${upiTxnId ? ` - Ref: ${upiTxnId}` : ''}` : paymentMethod === 'card' ? 'Card POS on Pickup' : 'Cash on Pickup';

    const message =
      `*New Order - City Madina Restaurant*%0A%0A` +
      `*Order Type:* ${orderType === 'takeaway' ? 'Highway Takeaway / Self Pickup' : 'Local Delivery'}%0A` +
      `*Payment Method:* ${paymentLabel}%0A` +
      `*Customer:* ${customerName || 'Customer'} (${customerPhone || 'N/A'})%0A` +
      (orderType === 'delivery' ? `*Delivery Address:* ${address}%0A` : `*Vehicle / Pickup Note:* ${pickupNote || 'Standard'}%0A`) +
      `%0A*Items:*%0A${itemsText}%0A%0A` +
      `*Subtotal:* ₹${subtotal}%0A` +
      `*Packaging/Handling:* ₹${packagingFee}%0A` +
      `*GST (5%):* ₹${gst}%0A` +
      `*Total Bill:* ₹${total}%0A%0A` +
      `Please confirm my order and share estimated preparation time.`;

    window.open(`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${message}`, '_blank');
  };

  const handleReset = () => {
    setConfirmedOrder(null);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-zinc-900 border-l border-zinc-800 h-full flex flex-col shadow-2xl animate-slide-left">
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-white">Your Order</h3>
            <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full tabular-nums">
              {cart.reduce((sum, i) => sum + i.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {confirmedOrder ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Order Placed Successfully
                </span>
                <h4 className="text-2xl font-mono font-bold text-amber-400 mt-1">
                  #{confirmedOrder.id}
                </h4>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-left text-xs space-y-2 text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Method:</span>
                  <span className="font-semibold text-white capitalize">{orderType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Total Bill:</span>
                  <span className="font-bold text-amber-400 text-sm">₹{confirmedOrder.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Estimated Prep:</span>
                  <span className="font-semibold text-emerald-400">15–25 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Payment Method:</span>
                  <span className="font-semibold text-emerald-400">{confirmedOrder.method}</span>
                </div>
              </div>

              <p className="text-xs text-zinc-400">
                Our kitchen at Kuvempu Nagar has received your order. We are packing it fresh and hot for your journey!
              </p>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Track on WhatsApp (+91 99866 95215)</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold rounded-xl"
              >
                Close & Return
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-16 text-center text-zinc-500 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto stroke-1 opacity-40 text-amber-500" />
              <p className="text-sm font-medium text-zinc-400">Your order cart is empty</p>
              <p className="text-xs text-zinc-500">
                Browse our delicious Biryanis, Tandoori sizzlers, and Rumali Roti rolls to add dishes.
              </p>
            </div>
          ) : (
            <>
              {/* Order Mode Switcher */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-zinc-950 rounded-xl border border-zinc-800">
                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                    orderType === 'takeaway'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Highway Takeaway</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                    orderType === 'delivery'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Channapatna Delivery</span>
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-2.5">
                {cart.map((item) => (
                  <div
                    key={item.dish.id}
                    className="p-3 bg-zinc-950/70 border border-zinc-800 rounded-xl flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-800 shrink-0">
                        <img src={item.dish.image} alt={item.dish.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">{item.dish.name}</h4>
                        <span className="text-xs font-bold text-amber-400 tabular-nums">
                          ₹{item.dish.price * item.quantity}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.dish.id, -1)}
                        className="w-6 h-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center text-xs font-bold text-white tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.dish.id, 1)}
                        className="w-6 h-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.dish.id)}
                        className="ml-1 p-1 text-zinc-500 hover:text-red-400"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Details Form */}
              <div className="p-3.5 bg-zinc-950/80 border border-zinc-800 rounded-xl space-y-2.5">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 block">
                  Contact & Instructions
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {orderType === 'delivery' ? (
                  <input
                    type="text"
                    placeholder="Delivery Address in Channapatna..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Vehicle / Pickup details (e.g. White Swift / 20 mins)"
                    value={pickupNote}
                    onChange={(e) => setPickupNote(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                )}
              </div>

              {/* Payment Method Selection */}
              <div className="p-3.5 bg-zinc-950/80 border border-zinc-800 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 block">
                    Select Payment Method
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Secure Checkout
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  {/* UPI Option */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center gap-1.5 ${
                      paymentMethod === 'upi'
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-sm'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <QrCode className={`w-4 h-4 ${paymentMethod === 'upi' ? 'text-amber-400' : 'text-zinc-500'}`} />
                    <span className="text-[11px] font-bold">UPI / QR</span>
                  </button>

                  {/* Cash on Pickup / Delivery */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center gap-1.5 ${
                      paymentMethod === 'cash'
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-sm'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Banknote className={`w-4 h-4 ${paymentMethod === 'cash' ? 'text-amber-400' : 'text-zinc-500'}`} />
                    <span className="text-[11px] font-bold">Cash</span>
                  </button>

                  {/* Card at Counter */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center gap-1.5 ${
                      paymentMethod === 'card'
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-sm'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <CreditCard className={`w-4 h-4 ${paymentMethod === 'card' ? 'text-amber-400' : 'text-zinc-500'}`} />
                    <span className="text-[11px] font-bold">Card (POS)</span>
                  </button>
                </div>

                {/* Dynamic Details based on payment method */}
                {paymentMethod === 'upi' && (
                  <div className="p-3 bg-zinc-900/90 rounded-lg border border-amber-500/30 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-300 font-medium">GPay · PhonePe · Paytm</span>
                      <button
                        type="button"
                        onClick={() => setShowQrModal(true)}
                        className="px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold rounded-md border border-amber-500/40 flex items-center gap-1 transition-colors"
                      >
                        <QrCode className="w-3.5 h-3.5" />
                        <span>Scan QR (₹{total})</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-zinc-950 p-2 rounded border border-zinc-800 text-xs">
                      <div className="min-w-0">
                        <span className="text-[10px] text-zinc-500 block">UPI ID:</span>
                        <span className="font-mono text-white text-[11px] truncate block">{upiId}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyUpi}
                        className="px-2 py-1 text-[11px] text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors flex items-center gap-1 shrink-0"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedUpi ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter 12-digit UPI UTR / Ref No. (Optional)"
                      value={upiTxnId}
                      onChange={(e) => setUpiTxnId(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                )}

                {paymentMethod === 'cash' && (
                  <div className="p-2.5 bg-zinc-900/90 rounded-lg border border-zinc-800 text-xs text-zinc-400 space-y-1">
                    <p className="font-medium text-white flex items-center gap-1.5">
                      <Banknote className="w-4 h-4 text-emerald-400" />
                      <span>Pay in Cash</span>
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      Pay in cash upon counter pickup or to the delivery rider in Channapatna. Exact change appreciated!
                    </p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="p-2.5 bg-zinc-900/90 rounded-lg border border-zinc-800 text-xs text-zinc-400 space-y-1">
                    <p className="font-medium text-white flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-amber-400" />
                      <span>Card POS Machine</span>
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      Wireless card swiping machine available at our counter and with delivery staff. All Visa, Mastercard, RuPay & Contactless cards accepted.
                    </p>
                  </div>
                )}
              </div>

              {/* Pricing Breakdown */}
              <div className="p-3.5 bg-zinc-950/80 border border-zinc-800 rounded-xl space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Item Subtotal:</span>
                  <span className="tabular-nums font-medium text-zinc-200">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Eco Packaging & Handling:</span>
                  <span className="tabular-nums font-medium text-zinc-200">₹{packagingFee}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>GST (5%):</span>
                  <span className="tabular-nums font-medium text-zinc-200">₹{gst}</span>
                </div>
                <div className="pt-2 border-t border-zinc-800 flex justify-between text-sm font-bold">
                  <span className="text-white">Total Payable:</span>
                  <span className="text-amber-400 tabular-nums">₹{total}</span>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Drawer Footer Actions */}
        {!confirmedOrder && cart.length > 0 && (
          <div className="p-4 border-t border-zinc-800 space-y-2 bg-zinc-950">
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order via WhatsApp Direct (+91 99866 95215)</span>
            </button>

            <button
              onClick={handlePlaceOrder}
              disabled={!customerName || !customerPhone}
              className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <span>
                Confirm Order ({paymentMethod === 'upi' ? 'Pay via UPI' : paymentMethod === 'card' ? 'Pay via Card' : 'Pay via Cash'})
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {(!customerName || !customerPhone) && (
              <p className="text-[10px] text-zinc-500 text-center">
                * Please enter your name and phone number above to confirm.
              </p>
            )}
          </div>
        )}

      </div>

      {/* UPI QR Code Scanner Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-xs w-full text-center space-y-4 shadow-2xl animate-scale-up">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-amber-500/40">
                  <img src={restaurantLogo} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">City Madina UPI</h4>
                  <span className="text-[10px] text-amber-400">Scan & Pay Instantly</span>
                </div>
              </div>
              <button
                onClick={() => setShowQrModal(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Stylized QR Code Box */}
            <div className="p-4 bg-white rounded-2xl mx-auto w-52 h-52 flex flex-col items-center justify-center shadow-lg relative">
              {/* QR Pattern Representation */}
              <div className="w-full h-full border-4 border-zinc-950 p-2 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div className="w-10 h-10 border-4 border-zinc-950 flex items-center justify-center">
                    <div className="w-4 h-4 bg-zinc-950" />
                  </div>
                  <div className="w-10 h-10 border-4 border-zinc-950 flex items-center justify-center">
                    <div className="w-4 h-4 bg-zinc-950" />
                  </div>
                </div>

                {/* Center Brand Badge */}
                <div className="w-10 h-10 rounded-full bg-zinc-950 border-2 border-amber-500 flex items-center justify-center mx-auto overflow-hidden">
                  <img src={restaurantLogo} alt="City Madina" className="w-full h-full object-cover" />
                </div>

                <div className="flex justify-between items-end">
                  <div className="w-10 h-10 border-4 border-zinc-950 flex items-center justify-center">
                    <div className="w-4 h-4 bg-zinc-950" />
                  </div>
                  <div className="text-[9px] font-mono font-bold text-zinc-950 tracking-tighter">
                    ₹{total}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-zinc-400">Total Payable Amount:</span>
              <div className="text-2xl font-bold font-mono text-amber-400">₹{total}</div>
              <span className="text-[11px] text-zinc-500 block font-mono">UPI ID: {upiId}</span>
            </div>

            <p className="text-[10px] text-zinc-400 leading-relaxed">
              Open Google Pay, PhonePe, Paytm, or BHIM and scan to pay City Madina Restaurant.
            </p>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl transition-colors"
            >
              Done & Return to Checkout
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
