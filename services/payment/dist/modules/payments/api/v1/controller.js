var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var controller_exports = {};
__export(controller_exports, {
  default: () => controller_default
});
module.exports = __toCommonJS(controller_exports);
var import_express = __toESM(require("express"));
var import_mongoose = __toESM(require("mongoose"));
var import_celebrate = require("celebrate");
var import_mongoose_filter_query = __toESM(require("@sliit-foss/mongoose-filter-query"));
var import_functions = require("@sliit-foss/functions");
var import_constants = require("@app/constants");
var import_middleware = require("@app/middleware");
var import_service = require("./service");
var import_schema = require("./schema");
const app = (0, import_express.default)();
app.set("view engine", "ejs");
const payment = import_express.default.Router();
const paypal = require("paypal-rest-sdk");
paypal.configure({
  mode: "sandbox",
  // sandbox or live
  client_id: "AcmQTWo29gmRgHYMgbXjATiVnXHi-BgrpMIPvy7hEvHgHsQIa4jmgKj4geiMhgLLH2nV4Ns5Y0_f_nv1",
  client_secret: "EPbPDqR49DSsW59ES8ggYq9rWn-TbPeTPVaaLmz2o4nZONXi8qLRweFKEYcZIprMylkNyjaHQRghZi4G"
});
app.post("/pay", (req, res) => {
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal"
    },
    redirect_urls: {
      return_url: "http://localhost:4003/api/v1/payments/success",
      cancel_url: "http://localhost:4003/api/v1/payments/cancel"
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Red Sox Hat",
              sku: "001",
              price: "25.00",
              currency: "USD",
              quantity: 1
            }
          ]
        },
        amount: {
          currency: "USD",
          total: "25.00"
        },
        description: "Hat for the best team ever"
      }
    ]
  };
  paypal.payment.create(create_payment_json, function(error, payment2) {
    if (error) {
      throw error;
    } else {
      for (let index = 0; index < payment2.links.length; index++) {
        if (payment2.links[index].rel === "approval_url") {
          res.redirect(payment2.links[index].href);
        }
      }
    }
  });
});
payment.post(
  "/",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.BODY]: import_schema.createPaymentSchema }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerCreatePayment(req, res) {
    const data = await (0, import_service.serviceCreatePayment)({
      ...req.body,
      user_id: import_mongoose.default.Types.ObjectId(req.body.user_id)
      // convert user_id to ObjectId
    });
    return (0, import_middleware.toSuccess)({ res, data, message: "Payment created successfully!" });
  }, "controllerCreatePayment"))
);
app.get("/paypal", (req, res) => res.render("index"));
app.get("/success", (req, res) => {
  const payerID = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const execute_payment_json = {
    payer_id: payerID,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: "25.00"
        }
      }
    ]
  };
  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function(error, payment2) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log(JSON.stringify(payment2));
        res.send("Success");
      }
    }
  );
});
app.get("/cancel", (req, res) => res.send("Cancelled"));
payment.get(
  "/",
  import_mongoose_filter_query.default,
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerGetPayments(req, res) {
    const data = await (0, import_service.serviceGetPayments)(
      req.query.filter,
      req.query.sort,
      req.query.page,
      req.query.limit
    );
    return (0, import_middleware.toSuccess)({ res, data, message: "Payments fetched successfully!" });
  }, "controllerGetPayments"))
);
payment.get(
  "/:id",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.PARAMS]: (0, import_constants.objectIdSchema)() }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerGetPaymentById(req, res) {
    const data = await (0, import_service.serviceGetPaymentById)(req.params.id);
    return (0, import_middleware.toSuccess)({ res, data, message: "Payment fetched successfully!" });
  }, "controllerGetPaymentById"))
);
payment.patch(
  "/:id",
  (0, import_celebrate.celebrate)({
    [import_celebrate.Segments.PARAMS]: (0, import_constants.objectIdSchema)(),
    [import_celebrate.Segments.BODY]: import_schema.updatePaymentSchema
  }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerUpdatePaymentById(req, res) {
    const data = await (0, import_service.serviceUpdatePaymentById)(req.params.id, req.body);
    return (0, import_middleware.toSuccess)({ res, data, message: "Payment updated successfully!" });
  }, "controllerUpdatePaymentById"))
);
payment.delete(
  "/:id",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.PARAMS]: (0, import_constants.objectIdSchema)() }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerDeletePaymentById(req, res) {
    const data = await (0, import_service.serviceDeletePaymentById)(req.params.id);
    return (0, import_middleware.toSuccess)({ res, data, message: "Payment deleted successfully!" });
  }, "controllerDeletePaymentById"))
);
app.use(payment);
var controller_default = app;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=controller.js.map
