/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const cacheSet = new Set();

  emails.forEach(email => {
    const [local, domain] = email.split('@');
    let _local = local.replace(/\./g, '').replace(/(\+\S*$)/, '');
    cacheSet.add(`${_local}@${domain}`);
  });
  

  return cacheSet.size;
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])