const iconsData = [
    "https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWdAPWT0Vb3Eth37phC9Wplk4PJYY04xKlrvLf6eD_pjXTNUMjeq7Q8DgqgYbj8qbJr-766Vmg-Z3YSsEOxObXKphMTFZd-A8g.png?r=bd7"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZf5kiIAuiZG_DvLse1xSkgukFUqHQQR5d6qSDQBlw720nd7cYHcXavvtFNfg5814g1njOdPHGbrKYs9KdWq9hnEqL2-xxh5MA.png?r=1d4"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV0j-bGEVAaWomcgXqIMEfw-h-in8B5DB_edifknx-3aNWWIQKU1KMFN9OZtzQMTCYp2ovDEaPHJlCkDBmdtDUTJwUb0-c_BBg.png?r=a4b"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSVY0nClWjEeYZcqCRHYlGkM3xLJGCigAOsoESa7WaW8hH_99_LBnn4U8OrZJp78wh2FvQH3YGDKCmnKx0L_iT5bc8tc2A8AYQ.png?r=98e"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRALaKaonY6GfYhbjPRi6y9-yRNzLhI4bjZmc95qXOZODKsLQm6mxPAoEPA9ukfvHSo_OYWkmO1akAmMPTKzig9XzSYimmYUUA.png?r=54c"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWP7dngMuFj6d4Hr3kCkJAijucivMNIbY6ak4NJtbCgEWKSEqE_31Kp6kTIip3kS0JUhEnA78GnsLSq0M829d2jpc4aqffP5ng.png?r=558"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeKAhhelX-wz_RiGf_mTrXQgLH9heqmzLj3VTGX3aATuJpHuRGWC_BHqa2yc7HXPSgQ9bfDKD5aXWG7yPRSIYNRVj1CSfDpqNw.png?r=cad"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRNxh2T8XhS7jBOLKwI1j-R0CJFhtTa-nxz5EhkX0EL4ue-amefp4mC1fsf0-rd8vynj9TXF2unD7iD4vFlh5kp5XCMtfUa4NA.png?r=a16"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQbPHLHMADSYHIjUxUrTHwEeJXOX-rF9NpbKyfLmXJnukropAUAR-faZGpu9eIgjUKX5udaZMo6Wze-ifSqCOKW7CfizWSlYJg.png?r=eea"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSQGQWkzf71tVsbzO1dU6kvtezyXhoWTkUzebNS_MSeRVGdckDNMVs1q7DIks1J_qGDNfrVjr2OEZvTPsNq9zBLKCbgRvCj-RA.png?r=d47"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABafGsF7RLiQlTUx1eVpITxBZ5Me8s0M3fvgIbDNpwk1-2dnsNGRdzVOyajfwonpnfF3MKRdPt2l5GejDXr3cbGE8fVV1YWdHhw.png?r=ce4"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd148B0ZT3d_N6KcgB2_xM2k57VsubEa0FQBp3lj_WPe1m9Zzbgq_KkVdLNfvUmTN5hm7kvTTd0JF9QMxEjW_-TaX5u9vo2QBg.png?r=181"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdxbwI5TRu89nI_cd6jTv-IflvV5Zk6Cs4_ZbL9TqcYqro8KZ6RonjEQZn0ZSkwYJ50xjR6_nbqnnvwVYYCaTagdYdV3aQrkqA.png?r=ae9"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWkqCkPdPuyQh9kOjmHPTUZfwG-R8QZbs-drqkZh8qzWeyICABKFknYDnpl_2Nj4pYCA3UxVu3IjuFjW_B_3D5_5I9R4ynhH1g.png?r=ab6"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcVQpnZKvDFkrGbvZ1Z5QXziVqAK3aaBrGCqsgltpUilQBRAFFYvmyqlRlZF3WubCdfFfzDnVyeNa3kFjxLgif-qYdfJbpj8VQ.png?r=15e"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZsTJIzptemB-cosynsAooOB5sA4GwhYF_syr7OzlqFdoNloIkfLF0pm1rpmBKTs6fpeFMcxCFB5wzpng6jNJkgaRWh-A_T5nA.png?r=72f"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYNwAakf94HfoVx6gz2x8vcyNJa3tTYZPqdyGDJ93nPbawb7vDV7U60_-S5D6yxeDBw1LcQVb01i60Qpgtot-BiSKM179cXngQ.png?r=962"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXV9m-1tH2CczQ748E6sw2GuoovSGTTCoXiTdaPK68bY6pxUIEL_wjltolJN-vBkoy_skZ32eNp2lFaQrSv7NMdCFyvnljIIvA.png?r=54a"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQy-r3BAVV4g7ynm7173md_RPD_YaS48pjCA5j65eG8D3mQSjc0TTLG9THYUDSa3aTTpD28oiSORrXyMJ_kAXiU3A3mlmEVUcQ.png?r=f45"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVy0BGoTOaj5BQ4NQDPopqWL8X1ZCnS1sLVmhxtKMLaDnnePNuquscUF0mQl_rvRRHi_pJKZ1_4M6SavQ_7hi8XOx2evCq47UQ.png?r=a29"
    ,"https://occ-0-2706-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSjWB2nFuR8Ri6xzQ3Wu0djefSIhCdrWkFyFfNOCh612BZUZDykQpK4CrzvnhZeSyTWqUh0aSVaISMQteTWOkIdHIuDCigFMfA.png?r=b38"
];

export default iconsData;