import Certificatestorage "Certificatestorage";
actor class Certificatestorage {
    public shared(var) : async Text;
    public uploadCertificate : async ();
    public verifyCertificate : async ();
};