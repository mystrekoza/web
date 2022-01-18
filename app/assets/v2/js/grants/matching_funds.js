Vue.mixin({
  methods: {
    tabChange: function(input) {
      window.location = `${this.grant.details_url}?tab=${input}`;
    },
    enableTab: function() {
      let vm = this;
      let urlParams = new URLSearchParams(window.location.search);

      vm.targetGrant = urlParams.get('grant');

      vm.tab = urlParams.get('tab');

      switch (vm.tab) {
        case 'ready_to_claim':
          vm.tabSelected = 1;
          break;
        case 'claim_history':
          vm.tabSelected = 2;
          break;
        default:
          vm.tabSelected = 0;
      }
      window.history.replaceState({}, document.title, `${window.location.pathname}`);
    },
    async fetchGrants() {
      let vm = this;

      vm.loading = true;

      // fetch owned grants with clr matches
      const url = '/grants/v1/api/clr-matches/';

      try {
        let result = await (await fetch(url)).json();

        result = [
          {
            'id': 2575,
            'title': 'DefiLab_xyz',
            'admin_address': '0xD7ceb6F030699BF707Cb8b927A4f39c989c5Ab8B',
            'clr_matches': [
              {
                'pk': 6218,
                'amount': 9054.20287179098,
                'round_number': 12,
                'claim_tx': null,
                'grant_payout': {
                  'status': 'ready',
                  'contract_address': '0xAB8d71d59827dcc90fEDc5DDb97f87eFfB1B1A5B',
                  'payout_token': 'DAI',
                  'funding_withdrawal_date': null,
                  'grant_clrs': [
                    {
                      'display_text': 'Advocacy',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'Polygon',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'Climate Change',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'Longevity',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'zkTech',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'Forefront',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR12 - Main',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    }
                  ],
                  'network': 'mainnet'
                },
                'ready_for_payout': true
              },
              {
                'pk': 3571,
                'amount': 4230.1445376782,
                'round_number': 10,
                'claim_tx': '0x12527416a39b0a57463e1556a947cf66de09214e075b9e4bd6806fc4998ddba4',
                'grant_payout': {
                  'status': 'ready',
                  'contract_address': '0x3ebAFfe01513164e638480404c651E885cCA0AA4',
                  'payout_token': 'DAI',
                  'funding_withdrawal_date': null,
                  'grant_clrs': [
                    {
                      'display_text': 'GR10 - Latin America',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR10 - Community',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR10 - Building Gitcoin',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR10 - NFT',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR10 - Infra',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR10 - dApp',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    }
                  ],
                  'network': 'mainnet'
                },
                'ready_for_payout': true
              },
              {
                'pk': 5226,
                'amount': 1100.506135,
                'round_number': 11,
                'claim_tx': null,
                'grant_payout': {
                  'status': 'ready',
                  'contract_address': '0x0EbD2E2130b73107d0C45fF2E16c93E7e2e10e3a',
                  'payout_token': 'DAI',
                  'funding_withdrawal_date': null,
                  'grant_clrs': [
                    {
                      'display_text': 'GR11 - Latin America',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR11 - Africa',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR11 - dGov',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR11 - NFT',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR11 - Community',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR11 - dApp',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR11 - Infra',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR11 -Retroactive Funding',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    },
                    {
                      'display_text': 'GR11 - Gitcoin DAO',
                      'is_active': false,
                      'claim_start_date': null,
                      'claim_end_date': null
                    }
                  ],
                  'network': 'mainnet'
                },
                'ready_for_payout': true
              }
            ],
            'logo_url': [
              'https://c.gitcoin.co/grants/264c45a088a5ee415f4bfd259cecde50/Screenshot_2021-05-14_at_10.33.28.png'
            ],
            'details_url': '/grants/2575/defilab_xyz'
          }
        ];
        // update claim status + format date fields
        await Promise.all(result.map(async grant => {
          await Promise.all(grant.clr_matches.map(async m => {
            if (m.grant_payout) {
              m.grant_payout.funding_withdrawal_date = m.grant_payout.funding_withdrawal_date
                ? moment(m.grant_payout.funding_withdrawal_date).format('MMM D, Y')
                : null;

              m.grant_payout.grant_clrs.map(e => {
                e.claim_start_date = e.claim_start_date ? moment(e.claim_start_date).format('MMM D') : null;
                e.claim_end_date = e.claim_end_date ? moment(e.claim_end_date).format('MMM D, Y') : null;
              });
              const claimData = await vm.checkClaimStatus(m, grant.admin_address);

              m.status = claimData.status;

              // check to ensure we don't allow users to claim if balance is 0
              if (!m.claim_tx && m.status == 'no-balance-to-claim') {
                m.claim_tx = 'NA';
              }

              m.claim_date = claimData.timestamp ? moment.unix(claimData.timestamp).format('MMM D, Y') : null;
            } else {
              Promise.resolve();
            }
          }));
        }));

        vm.grants = result;

        vm.loading = false;

      } catch (e) {
        console.error(e);
        _alert('Something went wrong. Please try again later', 'danger');
      }
    },
    async checkClaimStatus(match, admin_address) {
      const recipientAddress = admin_address;
      const contractAddress = match.grant_payout.contract_address;
      const txHash = match.claim_tx;

      let status = 'not-found';
      let timestamp = null;

      web3 = new Web3(`wss://mainnet.infura.io/ws/v3/${document.contxt.INFURA_V3_PROJECT_ID}`);

      // check if contract has funds for recipientAddress
      const payout_contract = await new web3.eth.Contract(
        JSON.parse(document.contxt.match_payouts_abi),
        contractAddress
      );
      const amount = await payout_contract.methods.payouts(recipientAddress).call();

      if (amount == 0) {
        status = 'no-balance-to-claim';
        return { status, timestamp };
      }

      if (!txHash) {
        return { status, timestamp };
      }


      let tx = await web3.eth.getTransaction(txHash);

      if (tx && tx.to == contractAddress) {
        status = 'pending'; // claim transaction is pending

        addressWithout0x = recipientAddress.replace('0x', '').toLowerCase();

        // check if user attempted to claim match payout
        // 0x8658b34 is the method id of the claimMatchPayout(address _recipient) function
        userClaimedMatchPayout = tx.input.startsWith('0x8658b34') && tx.input.endsWith(addressWithout0x);

        if (userClaimedMatchPayout) {
          let receipt = await web3.eth.getTransactionReceipt(txHash);

          if (receipt && receipt.status) {
            status = 'claimed';
            timestamp = (await web3.eth.getBlock(receipt.blockNumber)).timestamp; // fetch claim date
          }
        }
      }

      return { status, timestamp };
    },
    async claimMatch(match, admin_address) {
      const vm = this;

      // Helper method to manage state
      const waitingState = (state) => {
        if (state === true) {
          document.getElementById('claim-match').classList.add('disabled');
        } else {
          document.getElementById('claim-match').classList.remove('disabled');
        }
        indicateMetamaskPopup(!state);
      };

      waitingState(true);

      // Connect wallet
      if (!provider) {
        await onConnect();
      }

      // Confirm wallet was connected (user may have closed wallet connection prompt)
      if (!provider) {
        _alert('Please connect Ethereum wallet', 'danger');
        return;
      }

      const chainId = Number(web3.eth.currentProvider.chainId);

      if (chainId < 1 || chainId > 5) {
        waitingState(false);
        _alert('Please connect to a valid Ethereum network', 'danger');
        return;
      }

      const networkName = getDataChains(String(chainId), 'chainId')[0] && getDataChains(String(chainId), 'chainId')[0].network;

      if (match.grant_payout.network != networkName) {
        waitingState(false);
        _alert(`Please connect to Ethereum ${match.grant_payout.network} network`, 'danger');
        return;
      }

      const user = (await web3.eth.getAccounts())[0];

      // Get contract instance
      const matchPayouts = await new web3.eth.Contract(
        JSON.parse(document.contxt.match_payouts_abi),
        match.grant_payout.contract_address
      );

      // Claim payout
      matchPayouts.methods.claimMatchPayout(admin_address)
        .send({from: user})
        .on('transactionHash', async function(txHash) {
          await vm.postToDatabase(match.pk, txHash);
          await vm.fetchGrants();
          vm.$forceUpdate();
          vm.tabSelected = 1;
          waitingState(false);
          _alert('Your matching funds claim is being processed', 'success');
        })
        .on('error', function(error) {
          waitingState(false);
          _alert(error, 'danger');
        });
    },
    async postToDatabase(matchPk, claimTx) {
      const url = '/grants/v1/api/clr-matches/';
      const csrfmiddlewaretoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

      try {
        let result = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfmiddlewaretoken
          },
          body: JSON.stringify({pk: matchPk, claim_tx: claimTx})
        });

        if (result.status >= 400) {
          throw await result.json();
        }
      } catch (err) {
        // TODO: Something went wrong, manual ingestion?
        console.error(err);
        _alert(err, 'danger');
        // console.log('Standard claim ingestion failed, falling back to manual ingestion');
      }
    },
    sortGrants() {
      // reset scroll to top grant
      if (this.targetGrant === undefined) {
        this.scrollToElement('grant-' + this.grants[0].id);
        this.targetGrant = null;
      }

      this.$nextTick(() => {
        switch (this.tabSelected) {
          case 0:
            this.grants.sort((a, b) => b.clr_matches.filter(a => !a.claim_tx).length - a.clr_matches.filter(a => !a.claim_tx).length);
            break;
          case 1:
            this.grants.sort((a, b) => b.clr_matches.filter(a => a.claim_tx).length - a.clr_matches.filter(a => a.claim_tx).length);
            break;
        }
      });
    },
    stringifyClrs(clrs) {
      let c = clrs.map(a => a.display_text);
      let g = [];

      c.every(elem => {
        g.push(elem);
        if (g.join(', ').length > 24) {
          g.splice(-1);
          g.push(`+${c.length - g.length} more`);
          return false;
        }
        return true;
      });

      return g.slice(0, -1).join(', ') + ' ' + g.slice(-1);
    },
    scrollToElement(element) {
      const container = this.$refs[element][this.tabSelected];

      container.scrollIntoView(true);
    }
  }
});

if (document.getElementById('gc-matching-funds')) {
  appGrantDetails = new Vue({
    delimiters: [ '[[', ']]' ],
    el: '#gc-matching-funds',
    data() {
      return {
        loading: true,
        grants: [],
        tabSelected: 1,
        tab: null,
        targetGrant: null
      };
    },
    mounted: async function() {
      this.enableTab();

      // fetch user's owned grants with CLR match history
      await this.fetchGrants();

      if (this.targetGrant) {
        // scroll to specific grant if url specified a target grant
        this.scrollToElement('grant-' + this.targetGrant);
        this.targetGrant = undefined;
      } else {
        // sort grants - it happens in the else block cause sort messes up with scrollToElement
        this.sortGrants();
      }
    }
  });
}